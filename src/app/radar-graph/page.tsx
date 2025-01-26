"use client";
import { Graph } from "@/components/Graph/Graph";
import { BooleanControl } from "@/components/Docs/Control/components/BooleanControl/BooleanControl";
import { Control } from "@/components/Docs/Control/Control";
import { ComponentProps, useState } from "react";
import { Radar } from "@/components/Radar/Radar";
import { ControlPanel } from "@/components/Panels/ControlPanel";
import { GraphPanel } from "@/components/Panels/GraphPanel";
import { ExamplesPanel } from "@/components/Panels/ExamplesPanel";

export default function Page() {
	const [radar, setRadar] = useState<ComponentProps<typeof Radar>>({
		loading: false,
	});
	const setRadarPartial = (partial: Partial<ComponentProps<typeof Radar>>) => setRadar((prev) => ({ ...prev, ...partial }));
	return (
		<div className={"h-full max-h-screen grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-[40%_1fr]"}>
			<ControlPanel>
				<h1 className={"text-2xl"}>Radar Graph</h1>
				<Control name={"loading"} type={"boolean"}>
					<BooleanControl
						value={radar.loading}
						onChange={(loading) => setRadarPartial({ loading })}
						description={"Renders loading skeleton placeholder"}
					/>
				</Control>
			</ControlPanel>
			<GraphPanel>
				<Graph gap={{ top: 30 }} data={MOCK_DATA}>
					<Radar {...radar} />
				</Graph>
			</GraphPanel>
		</div>
	);
}

const MOCK_DATA = [
	{
		name: "Jasons Progress",
		stroke: "#11ACAE",
		data: [
			{ x: "Fighting", y: 70 },
			{ x: "Farming", y: 8 },
			{ x: "Supporting", y: 300 },
			{ x: "Pushing", y: 90 },
			{ x: "Versatility", y: 60 },
		],
	},
];
