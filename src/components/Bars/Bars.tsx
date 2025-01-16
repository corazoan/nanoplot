import React from "react";
import { VerticalBars } from "@/components/Bars/components/VerticalBars";
import { HorizontalBars } from "./components/HorizontalBars";

type ComponentProps = {
	horizontal?: boolean;
	gap?: number;
	size?: number;
	radius?: number;
};

export const Bars = ({ horizontal, ...props }: ComponentProps) => {
	return horizontal ? <HorizontalBars {...props} /> : <VerticalBars {...props} />;
};
