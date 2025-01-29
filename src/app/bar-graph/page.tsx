"use client";
import { Graph } from "@/components/Graph/Graph";
import { ComponentProps, useState } from "react";
import { XAxis } from "@/components/XAxis/XAxis";
import { YAxis } from "@/components/YAxis/YAxis";
import { Legend } from "@/components/Legend/Legend";
import { GridLines } from "@/components/GridLines/GridLines";
import { LegendControlGroup } from "@/components/ControlGroup/LegendControlGroup/LegendControlGroup";
import { GridLinesControlGroup } from "@/components/ControlGroup/GridLinesControlGroup/GridLinesControlGroup";
import { ControlPanel } from "@/components/Panels/ControlPanel";
import { GraphPanel } from "@/components/Panels/GraphPanel";
import { ExamplesPanel } from "@/components/Panels/ExamplesPanel";
import { XAxisControlGroup } from "@/components/ControlGroup/XAxisControlGroup/XAxisControlGroup";
import { YAxisControlGroup } from "@/components/ControlGroup/YAxisControGroup/YAxisControlGroup";
import { Bars } from "@/components/Bars/Bars";
import { BarsControlGroup } from "@/components/ControlGroup/BarsControlGroup/BarsControlGroup";

export default function Page() {
	const [bars, setBars] = useState<ComponentProps<typeof Bars>>({});
	const [gridline, setGridline] = useState<ComponentProps<typeof GridLines>>({});
	const [xaxis, setXAxis] = useState<ComponentProps<typeof XAxis>>({});
	const [yaxis, setYAxis] = useState<ComponentProps<typeof YAxis>>({});
	const [legend, setLegend] = useState<ComponentProps<typeof Legend>>({});

	return (
		<div className={"h-full max-h-screen grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-[40%_1fr]"}>
			<ControlPanel>
				<h1 className={"text-2xl pb-2"}>Bars</h1>
				<BarsControlGroup state={bars} onChange={setBars} />
				<LegendControlGroup state={legend} onChange={setLegend} />
				<GridLinesControlGroup state={gridline} onChange={setGridline} />
				<XAxisControlGroup state={xaxis} onChange={setXAxis} />
				<YAxisControlGroup state={yaxis} onChange={setYAxis} />
			</ControlPanel>
			<GraphPanel>
				<Graph
					data={MOCK_DATA.map(({ group, ...d }) => {
						return {
							...d,
						};
					})}
					gap={{ top: 15, left: 15, right: 36, bottom: 15 }}
				>
					{legend.position === "top" && <Legend {...legend} />}
					{legend.position === "left" && <Legend {...legend} />}
					<YAxis
						{...yaxis}
						title={yaxis.title?.toString() && <div dangerouslySetInnerHTML={{ __html: yaxis.title?.toString() ?? "" }} />}
						description={
							yaxis.description?.toString() && (
								<div dangerouslySetInnerHTML={{ __html: yaxis.description?.toString() ?? "" }} />
							)
						}
					/>
					<GridLines {...gridline} />
					<Bars {...bars} />
					{legend.position === "right" && <Legend {...legend} />}
					<XAxis
						{...xaxis}
						title={xaxis.title?.toString() && <div dangerouslySetInnerHTML={{ __html: xaxis.title?.toString() ?? "" }} />}
						description={
							xaxis.description?.toString() && (
								<div dangerouslySetInnerHTML={{ __html: xaxis.description?.toString() ?? "" }} />
							)
						}
					/>
					{legend.position === "bottom" && <Legend {...legend} />}
				</Graph>
			</GraphPanel>
		</div>
	);
}

const MOCK_DATA = [
	{
		name: "Sally hours gamed",
		group: "gamers",
		data: [
			{ x: "Jan", y: 10 },
			{ x: "Feb", y: 20 },
			{ x: "Mar", y: 33 },
			{ x: "Apr", y: 24 },
			{ x: "May", y: 31 },
			{ x: "Jun", y: 43 },
		],
	},
	{
		name: "Joe hours gamed",
		group: "gamers",
		data: [
			{ x: "Jan", y: 50 },
			{ x: "Feb", y: 50 },
			{ x: "Mar", y: 33 },
			{ x: "Apr", y: 24 },
			{ x: "May", y: 21 },
			{ x: "Jun", y: 33 },
		],
	},
	{
		name: "Kate hours gamed",
		group: "viewers",
		data: [
			{ x: "Jan", y: 40 },
			{ x: "Feb", y: 21 },
			{ x: "Mar", y: 43 },
			{ x: "Apr", y: 54 },
			{ x: "May", y: 51 },
			{ x: "Jun", y: 23 },
		],
	},
	{
		name: "Josh hours gamed",
		group: "viewers",
		data: [
			{ x: "Jan", y: 30 },
			{ x: "Feb", y: 31 },
			{ x: "Mar", y: 53 },
			{ x: "Apr", y: 92 },
			{ x: "May", y: 41 },
			{ x: "Jun", y: 13 },
		],
	},
];
