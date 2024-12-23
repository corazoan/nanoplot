import { Graph } from "@/components/Graph/Graph";
import { GraphContext, useGraph, useGraphColumn } from "@/hooks/use-graph/use-graph";
import { MathUtils } from "@/utils/math/math";
import React, { ReactNode } from "react";
import { DomainUtils } from "@/utils/domain/domain";
import { cx } from "@/utils/cx/cx";

type From = "auto" | "min" | `min - ${number}` | `min + ${number}` | `min + ${number}%` | `min - ${number}%` | number;
type To = "auto" | "max" | `max - ${number}` | `max + ${number}` | `max + ${number}%` | `max - ${number}%` | number;
type interval = "days" | "months" | "years" | "hours" | "minutes" | "seconds" | "milliseconds";
type Jumps = `every ${number} ${interval}` | number;

type Props = {
	ticks?: { from?: From; to?: To; jumps?: Jumps };
	title?: ReactNode;
	description?: ReactNode;
	horizontal?: boolean;
};

export const XAxis = ({ title, description, horizontal }: Props) => {
	const context = useGraph();
	const column = useGraphColumn(context);
	return (
		<Graph.Row className={"items-center relative pt-2 text-xs font-normal select-none"} style={{ gridColumn: column }}>
			<div className={"flex"}>
				{context.domain?.[horizontal ? "y" : "x"].map((dp, i) => {
					return (
						<React.Fragment key={i}>
							<div
								className={cx(
									"absolute -translate-x-1/2 text-gray-700 dark:text-gray-300",
									horizontal && "translate-x-1/2",
								)}
								style={
									horizontal
										? { right: `${MathUtils.scale(dp.coordinate, 3000, 100)}%` }
										: { left: `${MathUtils.scale(dp.coordinate, 3000, 100)}%` }
								}
							>
								{typeof dp.tick === "number" ? dp.tick.toFixed(2) : dp.tick.toString()}
							</div>
							<div className={"opacity-0"}>{typeof dp.tick === "number" ? dp.tick.toFixed(2) : dp.tick.toString()}</div>
						</React.Fragment>
					);
				})}
			</div>
			{(title || description) && (
				<div className={"text-center mt-[10px] font-bold"}>
					<div className={"text-[14px] text-gray-700 dark:text-gray-300"}>{title}</div>
					<div className={"text-xs text-gray-500 dark:text-gray-600"}>{description}</div>
				</div>
			)}
		</Graph.Row>
	);
};

XAxis.context = (ctx: GraphContext, props: Props) => {
	return {
		...ctx,
		layout: {
			...ctx.layout,
			rows: ctx.layout.rows + " min-content",
			columns: ctx.layout.columns,
		},
		domain: {
			...ctx.domain,
			y: ctx.domain.y,
			x: DomainUtils.x.ticks(ctx, props.ticks),
		},
	};
};
