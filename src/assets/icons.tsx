import { cx } from "@/utils/cx/cx";

interface IProps {
	className?: string;
}
export const WorldmapIcon = ({ className }: IProps) => (
	<svg
		viewBox="0 0 526 526"
		className={cx(
			"[&_g>*]:fill-[hsl(14.2deg,70.71%,53.14%)] [&_g>*]:dark:fill-[hsl(210.5deg,68.97%,65.88%)] [&_g>_path]:fill-[hsl(14.2deg,70.71%,53.14%)] [&_g>_path]:dark:fill-[hsl(210.5deg,68.97%,65.88%)] w-12 h-11",
			className,
		)}
		strokeWidth="1.5"
		data-route="worldmap"
	>
		<path
			fill="#00c3ff"
			d="M8 107.517v303.366a16 16 0 0 0 12.862 15.689l133.953 26.791a47.995 47.995 0 0 0 25.817-1.958l154.946-56.343a31.999 31.999 0 0 1 17.211-1.305l132.073 26.415c9.901 1.98 19.138-5.593 19.138-15.689V101.117a15.999 15.999 0 0 0-12.862-15.689L357.185 58.637a47.995 47.995 0 0 0-25.817 1.958l-154.946 56.343a31.999 31.999 0 0 1-17.211 1.305L27.138 91.828C17.237 89.847 8 97.42 8 107.517z"
		/>
		<path
			fill="#00aaf0"
			d="M491.138 85.428 357.186 58.637A47.945 47.945 0 0 0 344 57.863v335.379a32.024 32.024 0 0 1 8.79.516l132.073 26.415c9.9 1.98 19.138-5.592 19.138-15.689V101.116a16 16 0 0 0-12.863-15.688z"
		/>
		<path
			fill="#b4e66e"
			d="M491.138 85.428 357.186 58.637a47.995 47.995 0 0 0-25.817 1.958l-45.345 16.489c-12.74 23.303-.026 50.354 21.977 60.25 33.167 14.917 84.751 31.499 92 62.667 6.667 28.667-24 68 24 72 45.601 3.8 40.823 58.532 80 45.097v-215.98a16 16 0 0 0-12.863-15.69z"
		/>
		<path
			fill="#a0d755"
			d="M491.138 85.428 357.186 58.637A47.945 47.945 0 0 0 344 57.863v94.991c26 11.721 51.106 26.104 56 47.147 6.667 28.667-24 68 24 72 45.601 3.8 40.823 58.532 80 45.097v-215.98a15.999 15.999 0 0 0-12.862-15.69z"
		/>
		<path
			fill="#b4e66e"
			d="m20.862 426.573 133.952 26.791a47.995 47.995 0 0 0 25.817-1.958l42.619-15.497L224 432c-24-64-99.094-.53-88-56 8-40-24-80-56-72s-36.12-24.478-40-40c-8-32-32-32-32-32v178.883a16.001 16.001 0 0 0 12.862 15.69z"
		/>
		<path
			fill="#00aaf0"
			d="M168 118.758c-2.927.23-5.884.065-8.79-.516L27.138 91.827C17.237 89.847 8 97.42 8 107.517v303.366a16 16 0 0 0 12.862 15.689l133.952 26.791a47.945 47.945 0 0 0 13.186.774V118.758z"
		/>
		<path
			fill="#b4e66e"
			d="M207 159c-19.068-6.356-56-8-72 16s0 48 32 48 40-16 48 0 40 16 40-8-24-48-48-56zM222 276c-7.589 2.53-24 32-8 40s40 0 40-16c0-8-8-32-32-24z"
		/>
		<path
			fill="#a0d755"
			d="m20.862 426.573 133.952 26.791a47.945 47.945 0 0 0 13.186.774v-53.383c-20.93.899-37.651 3.5-32-24.755 8-40-24-80-56-72s-36.12-24.478-40-40c-8-32-32-32-32-32v178.883a16.001 16.001 0 0 0 12.862 15.69zM448 360c-11.894 5.802-19.4 16.281-44 8.667-28-8.667-36 15.333-36.667 26v2l117.529 23.506c9.9 1.98 19.138-5.592 19.138-15.689V392c0-16-28.667-45.334-56-32zM168 222.969v-67.041c-12.954 2.048-25.364 7.618-33 19.072-16 24 0 48 32 48 .35 0 .656-.027 1-.031z"
		/>
		<path d="M493.083 77.729 358.86 50.884a55.578 55.578 0 0 0-29.903 2.268l-155.258 56.457a24.55 24.55 0 0 1-13.212 1.001L28.147 84.142a23.459 23.459 0 0 0-19.534 4.877A23.449 23.449 0 0 0 0 107.217v303.978c0 11.178 7.956 20.883 18.917 23.076l134.223 26.845a55.596 55.596 0 0 0 29.903-2.268l155.258-56.457a24.558 24.558 0 0 1 13.212-1.001l132.339 26.468a23.447 23.447 0 0 0 19.534-4.877 23.446 23.446 0 0 0 8.613-18.198V100.805c.001-11.179-7.955-20.883-18.916-23.076zm-159-10.481a40.214 40.214 0 0 1 2.594-.844v74.756c-3.089-1.322-6.145-2.61-9.128-3.867-5.813-2.449-11.304-4.762-16.368-7.04-8.397-3.777-15.223-11.892-18.728-22.264-3.165-9.368-3.166-19.312-.055-25.584l41.685-15.157zm-166.26 117.123a7.5 7.5 0 0 0-7.5 7.5v23.149c-10.456-1.332-18.553-5.904-22.249-12.809-3.605-6.735-2.567-14.979 2.922-23.214 12.888-19.332 44.912-19.286 63.533-13.078 20.751 6.917 42.969 28.257 42.969 48.998 0 6.145-2.849 9.932-8.468 11.259-6.842 1.613-14.81-1.407-17.405-6.597-4.367-8.735-9.804-11.245-15.436-11.245-4.006 0-8.112 1.271-12.001 2.474-5.011 1.551-10.946 3.385-18.866 4.199v-23.136a7.499 7.499 0 0 0-7.499-7.5zM21.859 419.562A8.554 8.554 0 0 1 15 411.195V241.543c.785.367 1.597.79 2.428 1.297 7.134 4.35 12.133 12.087 14.861 22.996.336 1.345.674 2.822 1.033 4.39 2.717 11.863 6.823 29.79 20.505 38.186 4.815 2.954 10.319 4.435 16.448 4.435 3.527 0 7.261-.491 11.188-1.473a7.5 7.5 0 0 0 5.457-9.095c-1.005-4.019-5.08-6.464-9.095-5.457-6.792 1.697-12.076 1.307-16.154-1.196-8.313-5.1-11.443-18.769-13.729-28.749a246.185 246.185 0 0 0-1.103-4.679c-6.48-25.92-22.343-34.037-31.84-36.581v-27.864c.572-.124 1.152-.262 1.716-.372a7.5 7.5 0 0 0 5.928-8.795c-.717-3.68-4.009-6.193-7.645-6.053v-75.314a8.5 8.5 0 0 1 3.123-6.598 8.499 8.499 0 0 1 7.083-1.769l132.339 26.467c.922.185 1.849.333 2.778.45v23.799c-13.926 3.452-24.831 10.645-31.807 21.109-8.578 12.866-9.914 26.939-3.667 38.612 6.267 11.711 19.272 19.236 35.474 20.821v163.772c-7.363.312-14.746.331-16.848-2.112-.774-.899-2.36-4.069-.362-14.057 5.915-29.575-8.092-62.249-32.58-76.002a7.5 7.5 0 0 0-7.346 13.078c16.218 9.109 30.567 33.227 25.216 59.982-2.49 12.449-1.313 20.96 3.704 26.787 6.436 7.473 16.859 7.799 28.215 7.337v38.107a40.686 40.686 0 0 1-4.241-.594l-134.22-26.846zm156.058 25.189c-.857.312-1.722.592-2.594.844v-37.254c15.889-.074 30.984 2.966 39.991 22.812l-37.397 13.598zm51.541-18.741c-12.39-28.579-35.141-32.653-54.135-32.65V230.061c10.263-.898 17.885-3.247 23.299-4.923 2.748-.85 6.498-2.001 7.607-1.823.167.13.881.776 1.98 2.973 4.728 9.456 15.511 15.347 26.849 15.347 2.465 0 4.957-.278 7.418-.859 12.35-2.916 20.021-12.823 20.021-25.857 0-13.056-6.021-26.937-16.956-39.086-9.848-10.942-23.067-19.742-36.269-24.143-10.199-3.399-22.476-4.918-33.95-4.308v-22.605a39.551 39.551 0 0 0 3.502-1.071l96.58-35.119c-.831 7.613.093 16.082 2.838 24.206 4.906 14.521 14.419 25.58 26.786 31.142 5.228 2.352 10.799 4.699 16.697 7.183 3.227 1.36 6.54 2.756 9.885 4.193a7.463 7.463 0 0 0-2.923 2.73c-2.717 4.454-5.229 9.406-7.465 14.718a7.502 7.502 0 0 0 6.909 10.412 7.504 7.504 0 0 0 6.916-4.592 107.784 107.784 0 0 1 1.629-3.669v212.315c-1.179.309-2.35.652-3.502 1.071L229.458 426.01zm122.219-39.779v-221.77c6.818 3.372 13.345 6.962 19.113 10.824a7.47 7.47 0 0 0 4.167 1.27 7.5 7.5 0 0 0 4.18-13.733c-8.304-5.562-17.795-10.497-27.459-14.999v-1.914a7.527 7.527 0 0 0 4.21 1.291 7.468 7.468 0 0 0 4.174-1.274c3.683-2.473 7.734-4.548 12.044-6.167a7.5 7.5 0 1 0-5.276-14.041c-5.395 2.027-10.485 4.636-15.13 7.755l-.022.017V64.999c1.419.131 2.835.313 4.241.594l134.222 26.845a8.554 8.554 0 0 1 6.859 8.367v206.509c-10.952 4.632-15.09 2.633-16.547 1.919-4.185-2.052-7.508-7.395-11.356-13.582-7.591-12.202-17.986-28.914-44.135-31.093-9.331-.777-15.48-3.008-18.279-6.631-4.115-5.328-2.315-15.67-.41-26.62 1.811-10.405 3.862-22.199 1.323-33.12-.94-4.041-2.528-8.018-4.721-11.819a7.5 7.5 0 0 0-10.244-2.749 7.5 7.5 0 0 0-2.749 10.244c1.455 2.522 2.499 5.12 3.104 7.722 1.849 7.952.151 17.712-1.491 27.15-2.378 13.668-4.837 27.803 3.318 38.361 5.556 7.193 15.01 11.252 28.904 12.41 18.639 1.553 25.441 12.489 32.644 24.067 6.198 9.963 13.479 21.668 28.844 21.668 3.488 0 7.394-.606 11.796-1.969v40.744a59.661 59.661 0 0 0-9.179-7.09c-14.083-8.799-29.255-10.027-42.722-3.458-2.771 1.352-5.227 2.861-7.6 4.321-8.177 5.027-14.635 8.999-30.983 3.939-15.133-4.684-25.196-.913-30.974 3.075-8.211 5.667-12.677 15.007-14.513 23.192l-6.574-1.315a40.572 40.572 0 0 0-2.779-.449zM497 404.783a8.5 8.5 0 0 1-3.123 6.598 8.502 8.502 0 0 1-7.083 1.768l-111.042-22.208c1.099-4.637 3.567-10.517 8.311-13.792 4.425-3.054 10.488-3.421 18.018-1.091 22.845 7.072 34.173.106 43.275-5.491 2.163-1.33 4.206-2.586 6.319-3.617 11.084-5.406 21.451-1.518 28.197 2.698C491.048 376.631 497 387.275 497 392.274v12.509z" />
		<path d="M261.496 300.089c0-6.857-3.879-20.531-14.288-28.034-5.343-3.85-14.479-7.519-27.648-3.13-8.878 2.959-18.894 19.625-19.846 33.023-.685 9.625 3.168 17.041 10.848 20.88 5.307 2.654 11.361 3.963 17.438 3.963 7.364 0 14.759-1.924 20.889-5.712 8.012-4.951 12.607-12.602 12.607-20.99zm-20.493 8.231c-6.717 4.15-16.698 4.61-23.733 1.093-1.312-.656-2.539-1.714-2.628-4.981-.229-8.34 6.968-19.512 9.896-21.353 5.71-1.854 10.259-1.478 13.899 1.146 5.74 4.137 8.059 12.905 8.059 15.865 0 3.996-2.987 6.682-5.493 8.23zM256.137 359.477c-4.933.816-9.768 1.313-14.371 1.475a7.5 7.5 0 1 0 .528 14.99c5.244-.184 10.726-.745 16.292-1.666a7.5 7.5 0 0 0-2.449-14.799zM213.914 357.381a72.956 72.956 0 0 1-12.813-5.488 7.5 7.5 0 0 0-7.192 13.164 88.122 88.122 0 0 0 15.452 6.617 7.498 7.498 0 0 0 2.278.355 7.5 7.5 0 0 0 2.275-14.648zM296.562 334.501a7.5 7.5 0 0 0-10.144 3.098c-2.265 4.256-4.835 7.913-7.641 10.867a7.5 7.5 0 1 0 10.878 10.328c3.738-3.937 7.104-8.698 10.005-14.149a7.5 7.5 0 0 0-3.098-10.144zM307.245 289.487c-4.08-.672-7.947 2.091-8.622 6.178-.898 5.44-1.827 10.26-2.84 14.734a7.5 7.5 0 0 0 7.322 9.158 7.503 7.503 0 0 0 7.308-5.845c1.079-4.765 2.063-9.869 3.01-15.603a7.5 7.5 0 0 0-6.178-8.622zM140.206 305.543a7.497 7.497 0 0 0 10.257 2.703 7.5 7.5 0 0 0 2.702-10.257c-2.661-4.564-5.291-9.254-7.546-13.292a7.5 7.5 0 0 0-10.206-2.889 7.5 7.5 0 0 0-2.889 10.206c2.288 4.094 4.957 8.855 7.682 13.529zM312.837 243.461c-4.11-.492-7.844 2.447-8.335 6.559-.38 3.188-.75 6.371-1.12 9.542l-.68 5.824a7.5 7.5 0 0 0 14.897 1.751l.682-5.84c.368-3.157.736-6.327 1.115-9.499a7.5 7.5 0 0 0-6.559-8.337zM113.587 260.309a163.438 163.438 0 0 1 3.644 5.434 7.493 7.493 0 0 0 10.365 2.249 7.5 7.5 0 0 0 2.249-10.365 180.235 180.235 0 0 0-3.981-5.937 697.265 697.265 0 0 0-5.025-7.07 7.5 7.5 0 1 0-12.169 8.769 701.99 701.99 0 0 1 4.917 6.92zM101.436 219.78c-3.789-4.357-7.397-8.181-11.029-11.688a7.5 7.5 0 0 0-10.42 10.79c3.316 3.202 6.629 6.715 10.13 10.741a7.48 7.48 0 0 0 5.663 2.579 7.5 7.5 0 0 0 5.656-12.422zM320.729 197.812a7.498 7.498 0 0 0-8.941 5.705c-1.072 4.852-2.052 9.935-2.997 15.539a7.5 7.5 0 0 0 7.405 8.747 7.502 7.502 0 0 0 7.387-6.255c.901-5.353 1.834-10.192 2.851-14.794a7.499 7.499 0 0 0-5.705-8.942zM63.666 188.68c-5.212-2.553-10.617-4.493-16.062-5.767a7.502 7.502 0 0 0-3.415 14.607c4.347 1.016 8.68 2.574 12.879 4.631a7.5 7.5 0 0 0 10.034-3.437 7.499 7.499 0 0 0-3.436-10.034zM400.355 135.039c2.428-.016 4.971.048 7.535.191a7.5 7.5 0 0 0 7.904-7.071 7.5 7.5 0 0 0-7.072-7.905c-2.872-.16-5.721-.23-8.464-.214a7.501 7.501 0 0 0-7.452 7.548c.027 4.141 3.435 7.467 7.549 7.451zM435.068 149.078c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l10.729-10.729 10.729 10.729c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197a7.5 7.5 0 0 0 0-10.606l-10.729-10.729 10.729-10.729a7.5 7.5 0 0 0 0-10.606 7.5 7.5 0 0 0-10.606 0l-10.729 10.729-10.729-10.729c-2.928-2.929-7.677-2.929-10.606 0s-2.929 7.678 0 10.606l10.729 10.729-10.729 10.729a7.5 7.5 0 0 0 0 10.606z" />
	</svg>
);

export const PieGraphIcon = ({ className }: IProps) => (
	<svg
		className={cx(
			"fill-[hsl(14.2deg,70.71%,53.14%)] dark:fill-[hsl(210.5deg,68.97%,65.88%)] stroke-[hsl(0deg,0%,100%)] dark:stroke-[hsl(210deg,22.22%,10.59%)] w-11 h-11",
			className,
		)}
		viewBox="400 400 1248 1248"
		strokeWidth="2"
		stroke="currentColor"
		data-route="pie-graph"
	>
		<g>
			<path d="M1024 0c565.539 0 1024 458.461 1024 1024s-458.461 1024-1024 1024S0 1589.539 0 1024 458.461 0 1024 0z" fill="none" />
			<path
				d="M1584 997.625c-6.285-135.689-60.8-258.775-146.801-352.513l-103.502 84.725c67.123 70.647 110.327 164.235 116.636 267.788H1584z"
				fill="#ff5754"
			/>
			<path
				d="M1050.7 1583.99c144.191-6.76 274.139-67.98 369.724-163.565 95.515-95.513 156.715-225.338 163.551-369.402h-133.673c-6.692 107.187-52.917 203.664-124.266 275.014-71.421 71.42-168.019 117.665-275.336 124.284v133.669z"
				fill="#e53935"
			/>
			<path
				d="M464.028 1051.02c6.836 144.064 68.036 273.888 163.551 369.402 95.585 95.585 225.533 156.806 369.724 163.565v-133.669c-107.317-6.619-203.915-52.864-275.336-124.284-71.35-71.35-117.574-167.827-124.266-275.014H464.028z"
				fill="#57b546"
			/>
			<path
				d="M997.304 464.014c-144.191 6.76-274.139 67.98-369.724 163.565C531.922 723.235 470.685 853.306 464 997.625h133.667c6.547-107.444 52.81-204.166 124.302-275.658 71.421-71.42 168.019-117.665 275.336-124.284V464.014z"
				fill="#f7851b"
			/>
			<path
				d="M1399.1 607.35c-93.178-83.94-214.66-137.066-348.399-143.336v133.669c92.125 5.682 176.347 40.567 243.527 95.512l104.873-85.845z"
				fill="#38b1de"
			/>
		</g>
	</svg>
);

export const ScatterGraphIcon = ({ className }: IProps) => (
	<svg className={cx("w-8 h-8", className)} viewBox="0 0 236 220" strokeWidth="12" stroke="currentColor" data-route="scatter-graph">
		<path
			fill="#3a312a"
			d="M239.375 226.625h-209.5v-210.5a1.5 1.5 0 1 0-3 0v212a1.5 1.5 0 0 0 1.5 1.5h211a1.5 1.5 0 1 0 0-3z"
			stroke="#3a312a"
		/>
		<path
			fill="#3a312a"
			strokeWidth="20"
			d="M28.375 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM61.845 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM95.305 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM128.775 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM162.235 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM195.705 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM229.165 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5z"
		/>
		<path
			fill="#3a312a"
			strokeWidth="10"
			d="M28.375 226.625h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 193.155h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 159.695h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 126.225h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 92.765h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 59.295h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 25.835h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3z"
		/>
		<circle fill="#f16c7a" stroke="#f16c7a" strokeWidth={20} cx="75.5" cy="168.5" r="8" />
		<path
			fill="#3a312a"
			d="M75.5 179c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#f16c7a" stroke="#f16c7a" strokeWidth={20} cx="193.5" cy="74.5" r="8" />
		<path
			fill="#3a312a"
			d="M193.5 85c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#87796f" stroke="#87796f" strokeWidth={20} cx="121.5" cy="110.5" r="8" />
		<path
			fill="#3a312a"
			d="M121.5 153c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle filter="#d7e057" stroke="#d7e057" strokeWidth={20} cx="49.5" cy="127.5" r="8" />
		<path
			fill="#3a312a"
			d="M49.5 148c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#8ac6dd" stroke="#8ac6dd" strokeWidth={20} cx="166.5" cy="144.5" r="8" />
		<path
			fill="#3a312a"
			d="M166.5 155c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#8ac6dd" stroke="#8ac6dd" strokeWidth={20} cx="83.5" cy="124.5" r="8" />
		<path
			fill="#3a312a"
			d="M83.5 105c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#87796f" stroke="#87796f" strokeWidth={20} cx="214.5" cy="106.5" r="8" />
		<path
			fill="#3a312a"
			d="M214.5 127c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle filter="#d7e057" cx="145.5" cy="102.5" r="8" />
		<path
			fill="#3a312a"
			d="M145.5 100c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
	</svg>
);

export const LineGraphIcon = ({ className }: IProps) => (
	<svg className={cx("w-10 h-10", className)} viewBox="20 30 206 206" strokeWidth="12" stroke="currentColor" data-route="line-graph">
		<path
			d="m228.209 85.026-53-10a1.505 1.505 0 0 0-1.692.973l-32.934 92.988-57.364-96.255a1.499 1.499 0 0 0-2.682.217l-53.556 135.5a1.498 1.498 0 0 0 1.395 2.052c.597 0 1.162-.36 1.395-.949L82.204 76.889l57.438 96.379a1.5 1.5 0 0 0 2.703-.267l33.57-94.789 51.737 9.762a1.5 1.5 0 1 0 .557-2.948z"
			fill="#8ac6dd"
			strokeWidth="12"
			stroke="#8ac6dd"
		/>
		<path
			d="M229.106 118.487a1.5 1.5 0 0 0-2.119-.094l-48.357 44.274-44.567-24.482a1.5 1.5 0 0 0-1.812.283L86.672 186.58l-56.95-35.355a1.5 1.5 0 0 0-1.582 2.548l57.989 36a1.503 1.503 0 0 0 1.88-.242l45.624-48.16 44.494 24.442a1.502 1.502 0 0 0 1.735-.208l49.15-45a1.497 1.497 0 0 0 .094-2.118z"
			fill="#ef6d7a"
			strokeWidth="12"
			stroke="#ef6d7a"
		/>
		<path d="M239.375 226.625h-209.5v-210.5a1.5 1.5 0 1 0-3 0v212a1.5 1.5 0 0 0 1.5 1.5h211a1.5 1.5 0 1 0 0-3z" />
		<path d="M28.375 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM61.845 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM95.305 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM128.775 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM162.235 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM195.705 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5zM229.165 226.625a1.5 1.5 0 0 0-1.5 1.5v11.75a1.5 1.5 0 1 0 3 0v-11.75a1.5 1.5 0 0 0-1.5-1.5z" />
		<path d="M28.375 226.625h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 193.155h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 159.695h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 126.225h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 92.765h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 59.295h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3zM28.375 25.835h-11.75a1.5 1.5 0 1 0 0 3h11.75a1.5 1.5 0 1 0 0-3z" />
	</svg>
);

export const BarGraphIcon = ({ className }: IProps) => (
	<svg
		className={cx(
			"fill-[hsl(14.2deg,70.71%,53.14%)] dark:fill-[hsl(210.5deg,68.97%,65.88%)] stroke-[hsl(0deg,0%,100%)] dark:stroke-[hsl(210deg,22.22%,10.59%)] w-12 h-12",
			className,
		)}
		strokeWidth="2"
		stroke="currentColor"
		viewBox="0 0 1900 2100"
		data-route="bar-graph"
	>
		<path d="M255.999 1512.31h255.999v256H255.999z" />
		<path d="M255.999 1256.31h255.999v256H255.999z" />
		<path d="M255.999 1000.31h255.999v256H255.999z" />
		<path d="M255.999 744.308h255.999v256H255.999z" />
		<path d="M640.001 1256.31H896v256H640.001z" />
		<path d="M640.001 1000.31H896v256H640.001z" />
		<path d="M640.001 744.308H896v256H640.001z" />
		<path d="M640.001 488.307H896v256H640.001z" />
		<path d="M640.001 1512.31H896v256H640.001z" />
		<g>
			<path fill="#949494" d="M1024 1563.49h255.999v204.818H1024z" />
			<path fill="#a9a9a9" d="M1024 1358.67h255.999v204.818H1024z" />
			<path fill="#bababb" d="M1024 1153.86h255.999v204.818H1024z" />
			<path fill="#d0d0d1" d="M1024 949.038h255.999v204.818H1024z" />
		</g>
		<g>
			<path fill="#7c7c7c" d="M1400.52 1163.39h255.999v302.462H1400.52z" />
			<path fill="#8c8d8d" d="M1400.52 860.923h255.999v302.462H1400.52z" />
			<path fill="#9b9b9c" d="M1400.52 558.461h255.999v302.462H1400.52z" />
			<path fill="#acadad" d="M1400.52 255.998h255.999V558.46H1400.52z" />
			<path fill="#686868" d="M1400.52 1465.85h255.999v302.462H1400.52z" />
		</g>
		<path fill="none" d="M0 0h2048v2048H0z" />
	</svg>
	// <svg
	// 	className={cx(
	// 		"fill-[hsl(14.2deg,70.71%,53.14%)] dark:fill-[hsl(210.5deg,68.97%,65.88%)] stroke-[hsl(0deg,0%,100%)] dark:stroke-[hsl(210deg,22.22%,10.59%)] w-8 h-8",
	// 		className,
	// 	)}
	// 	strokeWidth="2"
	// 	stroke="currentColor"
	// 	viewBox="3 2 20 20"
	// 	data-route="bar-graph"
	// >
	// 	<g id="SVGRepo_iconCarrier">
	// 		<rect x="6.28" y="11.98" width="4.78" height="10.52"></rect>
	// 		<rect x="15.85" y="8.15" width="4.78" height="14.35"></rect>
	// 		<rect x="11.07" y="3.37" width="4.78" height="19.13"></rect>
	// 	</g>
	// </svg>
);

export const RadarGraphtIcon = ({ className }: IProps) => (
	<svg className={cx("h-12 w-12", className)} viewBox="0 0 276 276" stroke="currentColor" strokeWidth="2" data-route="radar-chart">
		<style></style>
		<path fill="#ef5a9d" d="m133.456 73.931-13.254 3.621-18.618 5.085-35.179 45.368 35.179 45.368 126.189 34.469V48.169z" />
		<path
			fill="#3a312a"
			d="M228.684 46.976a1.498 1.498 0 0 0-1.306-.254L133.06 72.484a1.501 1.501 0 0 0 .791 2.894l92.422-25.245v155.744l-123.811-33.818-34.159-44.054 34.159-44.053 18.134-4.954a1.5 1.5 0 0 0-.79-2.894l-18.618 5.085a1.506 1.506 0 0 0-.791.528L65.22 127.086a1.5 1.5 0 0 0 0 1.838l35.179 45.369c.199.257.477.442.791.528l126.189 34.468a1.492 1.492 0 0 0 1.306-.255 1.5 1.5 0 0 0 .59-1.192V48.168a1.507 1.507 0 0 0-.591-1.192z"
		/>
		<path
			fill="#3a312a"
			d="M195.642 69.553 88.051 33.408a1.502 1.502 0 0 0-1.776.672L32.48 127.255a1.5 1.5 0 0 0 0 1.5l24.016 41.598a1.5 1.5 0 0 0 2.598-1.5l-23.583-40.848L88.26 36.642l105.405 35.412v111.903L88.259 219.368l-22.025-38.149a1.5 1.5 0 0 0-2.598 1.5l22.639 39.211a1.5 1.5 0 0 0 1.777.672l107.59-36.146a1.499 1.499 0 0 0 1.022-1.422V70.975a1.5 1.5 0 0 0-1.022-1.422z"
		/>
		<path fill="#3a312a" d="M115.74 127.584 84.086 16.712a1.5 1.5 0 0 0-2.885.823l31.653 110.873a1.5 1.5 0 1 0 2.886-.824z" />
		<path fill="#3a312a" d="M114.297 126.496H17a1.5 1.5 0 1 0 0 3h97.297a1.5 1.5 0 1 0 0-3z" />
		<path
			fill="#3a312a"
			d="M114.709 126.554a1.5 1.5 0 0 0-1.854 1.031l-31.623 110.88a1.5 1.5 0 1 0 2.885.823l31.623-110.88a1.5 1.5 0 0 0-1.031-1.854z"
		/>
		<path
			fill="#3a312a"
			d="m239.862 214.389-124.703-87.62a1.5 1.5 0 0 0-1.725 2.455l124.703 87.62a1.496 1.496 0 0 0 2.089-.366 1.498 1.498 0 0 0-.364-2.089z"
		/>
		<path
			fill="#3a312a"
			d="M240.227 39.631a1.5 1.5 0 0 0-2.089-.366l-124.703 87.503a1.5 1.5 0 0 0 1.723 2.456L239.86 41.721c.68-.476.844-1.412.367-2.09z"
		/>
		<circle fill="#ef6d7a" cx="33.779" cy="128.005" r="8" />
		<path
			fill="#3a312a"
			d="M33.779 118.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="66.405" cy="128.005" r="8" />
		<path
			fill="#3a312a"
			d="M66.405 118.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="101.783" cy="173.449" r="8" />
		<path
			fill="#3a312a"
			d="M101.783 163.95c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="87.745" cy="221.181" r="8" />
		<path
			fill="#3a312a"
			d="M87.745 211.681c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="87.745" cy="34.829" r="8" />
		<path
			fill="#3a312a"
			d="M87.745 25.33c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="101.783" cy="82.834" r="8" />
		<path
			fill="#3a312a"
			d="M101.783 73.334c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="195.164" cy="185.261" r="8" />
		<path
			fill="#3a312a"
			d="M195.164 175.761c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="195.164" cy="70.936" r="8" />
		<path
			fill="#3a312a"
			d="M195.164 61.436c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="227.773" cy="48.169" r="8" />
		<path
			fill="#3a312a"
			d="M227.773 38.668c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5zm0 16a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<circle fill="#ef6d7a" cx="227.773" cy="207.842" r="8" />
		<path
			fill="#3a312a"
			d="M227.773 198.342c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5zm0 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
		/>
		<path
			fill="#1caee4"
			d="M212.77 199.02v3.17l6.36 1.74c.05-.12.1-.22.16-.33l-6.52-4.58zM219.13 52.08l-6.36 1.74v3.25l6.55-4.6c-.07-.12-.13-.25-.19-.39zM221.08 54.9l-8.31 5.83v134.63l8.26 5.8a9.527 9.527 0 0 1 5.24-2.69V57.54a9.48 9.48 0 0 1-5.19-2.64z"
		/>
	</svg>
);

export const SunburstCartIcon = ({ className }: IProps) => (
	<svg className={cx("h-9 w-9", className)} viewBox="55 60 145 145" stroke="currentColor" strokeWidth="2">
		<switch>
			<g>
				<path
					fill="#382b73"
					d="m197.662 128.085-25.666 2.548a44.008 44.008 0 0 0-9.889-23.763l9.339-7.702 10.557-8.707C169.165 74.911 149.74 65 128 65v25.79c-13.123 0-24.911 5.718-33.008 14.798l-.356-.331-2.24-2.084-.939-.874-2.32-2.163-.121-.113-2.283-2.131-.215-.201-.383-.358c-3.747-3.502-7.179-6.72-9.987-9.358C64.871 100.401 58 116.898 58 135c0 15.441 5 29.715 13.469 41.29l20.827-15.212a44.425 44.425 0 0 0 12.913 11.812l-6.241 10.375-7.055 11.728C102.451 201.346 114.799 205 128 205c13.333 0 25.795-3.728 36.401-10.198C184.549 182.512 198 160.327 198 135c0-2.333-.115-4.64-.338-6.915zm-80.713 14.987a13.62 13.62 0 0 1-2.633-8.072c0-3.338 1.195-6.397 3.181-8.772A13.652 13.652 0 0 1 128 121.316c4.25 0 8.047 1.937 10.557 4.977a13.626 13.626 0 0 1 3.127 8.707c0 4.951-2.63 9.288-6.568 11.691a13.618 13.618 0 0 1-7.116 1.994c-2.581 0-4.994-.714-7.054-1.956a13.758 13.758 0 0 1-3.997-3.657z"
				/>
				<g>
					<path
						fill="#ef5a9d"
						d="M128 172.211V198c13.333 0 25.795-3.728 36.401-10.198L150.99 165.77a44.003 44.003 0 0 1-22.99 6.441z"
					/>
					<path
						fill="#fede3a"
						d="M128 114.316V83.79c-13.123 0-24.911 5.718-33.008 14.798 7.944 7.382 16.218 15.005 22.504 20.64A13.659 13.659 0 0 1 128 114.316z"
					/>
					<path
						fill="#1caee4"
						d="m116.949 136.072-24.653 18.006a44.425 44.425 0 0 0 12.913 11.812l15.737-26.162a13.741 13.741 0 0 1-3.997-3.656z"
					/>
					<path
						fill="#fff"
						d="M128 141.684v30.526a44.003 44.003 0 0 0 22.99-6.441l-15.874-26.079a13.616 13.616 0 0 1-7.116 1.994z"
					/>
					<path
						fill="#ef5a9d"
						d="M138.557 119.293a13.626 13.626 0 0 1 3.061 7.355l30.379-3.016a44.008 44.008 0 0 0-9.889-23.763l-23.551 19.424z"
					/>
					<path
						fill="#fede3a"
						d="m162.108 99.87 19.896-16.409C169.165 67.911 149.74 58 128 58v25.79c13.731 0 25.999 6.259 34.108 16.08z"
					/>
					<path
						fill="#1caee4"
						d="m138.557 119.293 23.551-19.423c-8.109-9.821-20.377-16.08-34.108-16.08v30.526c4.25 0 8.047 1.937 10.557 4.977z"
					/>
					<path
						fill="#fff"
						d="M83.789 128c0-11.294 4.235-21.598 11.203-29.412a4940.054 4940.054 0 0 1-18.845-17.613C64.871 93.401 58 109.898 58 128c0 15.441 5 29.715 13.469 41.29l20.827-15.212A44.012 44.012 0 0 1 83.789 128z"
					/>
					<path
						fill="#ef5a9d"
						d="M114.316 128c0-3.338 1.195-6.397 3.181-8.772-6.287-5.635-14.56-13.258-22.504-20.64C88.025 106.402 83.79 116.706 83.79 128a44.012 44.012 0 0 0 8.507 26.078l24.653-18.006a13.614 13.614 0 0 1-2.634-8.072z"
					/>
					<path
						fill="#1caee4"
						d="m105.209 165.89-13.295 22.103C102.451 194.346 114.799 198 128 198v-25.789a44 44 0 0 1-22.791-6.321z"
					/>
					<path
						fill="#fede3a"
						d="m120.946 139.728-15.737 26.162A44 44 0 0 0 128 172.21v-30.526c-2.581 0-4.994-.714-7.054-1.956z"
					/>
					<path
						fill="#1caee4"
						d="M198 128c0-2.333-.115-4.64-.338-6.915l-25.666 2.548c.141 1.437.214 2.894.214 4.367 0 15.996-8.495 30.008-21.22 37.77l13.411 22.033C184.549 175.512 198 153.327 198 128z"
					/>
					<path
						fill="#fede3a"
						d="M141.684 128c0 4.951-2.63 9.288-6.568 11.691l15.874 26.079c12.725-7.762 21.22-21.774 21.22-37.77 0-1.474-.073-2.931-.214-4.367l-30.379 3.016c.045.444.067.895.067 1.351z"
					/>
					<path
						fill="#e43d91"
						d="m150.13 109.749-11.572 9.544a13.626 13.626 0 0 1 3.061 7.355l14.928-1.482a28.564 28.564 0 0 0-6.417-15.417z"
					/>
					<path
						fill="#f7cb15"
						d="M141.684 128c0 4.951-2.63 9.288-6.568 11.691l7.8 12.815c8.256-5.036 13.768-14.127 13.768-24.505 0-.956-.047-1.901-.139-2.834l-14.928 1.482c.045.444.067.895.067 1.351z"
					/>
					<path
						fill="#d1d3d4"
						d="M135.116 139.691a13.616 13.616 0 0 1-7.116 1.994v15c5.464 0 10.57-1.528 14.916-4.179l-7.8-12.815z"
					/>
					<path
						fill="#f7cb15"
						d="m120.946 139.728-7.733 12.856A28.55 28.55 0 0 0 128 156.685v-15a13.626 13.626 0 0 1-7.054-1.957z"
					/>
					<path
						fill="#009add"
						d="m116.949 136.072-12.114 8.848a28.826 28.826 0 0 0 8.378 7.664l7.733-12.856a13.741 13.741 0 0 1-3.997-3.656z"
					/>
					<path
						fill="#e43d91"
						d="M106.396 109.131A28.57 28.57 0 0 0 99.316 128a28.561 28.561 0 0 0 5.519 16.92l12.114-8.848a13.62 13.62 0 0 1-2.633-8.072c0-3.338 1.195-6.397 3.181-8.772a1237.772 1237.772 0 0 1-11.101-10.097z"
					/>
					<path
						fill="#f7cb15"
						d="M106.396 109.131c4.021 3.694 7.83 7.165 11.101 10.097A13.653 13.653 0 0 1 128 114.316v-15c-8.617 0-16.346 3.8-21.604 9.815z"
					/>
					<path
						fill="#009add"
						d="m138.557 119.293 11.572-9.544c-5.261-6.372-13.221-10.433-22.13-10.433v15c4.251 0 8.048 1.937 10.558 4.977z"
					/>
					<path
						fill="#e43d91"
						d="M150.99 165.77a44.005 44.005 0 0 1-22.99 6.441v12.105c10.727 0 20.753-2.999 29.285-8.204l-6.295-10.342z"
					/>
					<path
						fill="#009add"
						d="m105.209 165.89-6.241 10.375c8.478 5.11 18.411 8.05 29.032 8.05V172.21a43.99 43.99 0 0 1-22.791-6.32zM184.316 128c0-1.877-.092-3.733-.272-5.563l-12.047 1.196c.141 1.437.214 2.894.214 4.367 0 15.996-8.495 30.008-21.22 37.77l6.295 10.342c16.208-9.888 27.03-27.736 27.03-48.112z"
					/>
					<path
						fill="#d1d3d4"
						d="M86.135 90.333c-8.983 9.978-14.451 23.184-14.451 37.667 0 12.423 4.022 23.906 10.836 33.218l9.776-7.14A44.01 44.01 0 0 1 83.789 128c0-11.294 4.235-21.598 11.203-29.412a4288.32 4288.32 0 0 1-8.857-8.255z"
					/>
					<path
						fill="#f7cb15"
						d="m162.108 99.87 9.339-7.702C161.118 79.657 145.49 71.684 128 71.684V83.79c13.731 0 25.999 6.259 34.108 16.08z"
					/>
				</g>
			</g>
		</switch>
	</svg>
);
