import React from "react";
import { CoordinatesUtils } from "../../../utils/coordinates/coordinates";
import { GraphUtils } from "../../../utils/graph/graph";
import { useGraph } from "../../../hooks/use-graph/use-graph";
import { cx } from "../../../utils/cx/cx";
import { ObjectUtils } from "../../../utils/object/object";
import { Rect } from "./Rect";

type Props = React.SVGAttributes<SVGSVGElement> & {
	children?: React.ReactNode;
	size?: number;
	radius?: number;
};

export const HorizontalBars = ({ children, size = 50, radius = 0, className }: Props) => {
	const context = useGraph();
	if (!GraphUtils.isXYData(context.data)) return null;

	const xForValue = CoordinatesUtils.xCoordinateFor(context);
	const yForValue = CoordinatesUtils.yCoordinateFor(context);
	const bars = context.data.flatMap((bar) => bar.data.map((xy) => ({ ...bar, group: bar.group ?? bar.id ?? bar.name, data: xy }))); // bars excl segments.
	const BAR_WIDTH = Math.floor((context.viewbox.y * (size / 100)) / new Set(bars.map((bar) => `${bar.data.y}|${bar.group}`)).size);
	/* dataset is a single array of rect's with x1/x2/y1/y2; rect can be a segment of a bar (grouped) or a bar itself */
	const dataset = context.domain.y
		.flatMap(({ tick, coordinate }) => {
			return Object.entries(
				ObjectUtils.groupBy(
					bars.filter((d) => d.data.y === tick),
					({ group }) => group,
				),
			).flatMap(([, barsForGroup], i, groups) => {
				const y1 = coordinate + BAR_WIDTH * i - (BAR_WIDTH * Object.keys(groups).length) / 2;
				return barsForGroup
					?.map((bar) => {
						return {
							...bar,
							x1: 0,
							x2: xForValue(bar.data.x),
							y1,
							y2: y1 + BAR_WIDTH,
						};
					})
					.map((segment, i, segments) => {
						const previousX = segments.slice(0, i).reduce((acc, { x2 }) => acc + x2, 0);
						return {
							...segment,
							x1: previousX,
							x2: segment.x2 + previousX,
							radius: i === segments.length - 1 ? radius : undefined,
						};
					});
			});
		})
		.filter((x) => !!x);

	return (
		<svg
			viewBox={`0 0 ${context.viewbox.x} ${context.viewbox.y}`}
			className={cx("[grid-area:graph] h-full w-full", className)}
			preserveAspectRatio={"none"}
		>
			{dataset.map(({ x1, x2, y1, y2, ...bar }, index) => {
				return (
					<Rect
						key={index}
						x1={x1}
						x2={x2}
						y2={y2}
						y1={y1}
						fill={String(bar.fill)}
						stroke={bar.stroke}
						radius={bar.radius}
						glow={false}
						horizontal={true}
						className={"bars__rect"}
					/>
				);
			})}
			{children}
		</svg>
	);
};
