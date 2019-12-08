import { AppContext } from "../api";

/**
 * Logo component.
 *
 * @param ctx injected context object
 */
export function logo(ctx: AppContext) {
    const ui = ctx.ui.logo;
    return [
        "div",
        ui.container,
        [
            "svg",
            {
                ...ui.m,
                viewBox: "0 0 60 60",
                fill: "#653C8A",
                xmlns: "http://www.w3.org/2000/svg"
            },
            [
                "path",
                {
                    d:
                        "M53.4082031,49.7421875 L44.3017578,49.7421875 L42.2021484,34.2880859 C42.0556633,33.1975857 41.9213873,31.9850327 41.7993164,30.6503906 C41.6772455,29.3157485 41.5673833,27.8590574 41.4697266,26.2802734 C41.2418608,27.7939529 40.7942742,29.6819548 40.1269531,31.9443359 C39.980468,32.4163435 39.8746748,32.7662749 39.8095703,32.9941406 L34.9511719,49.7421875 L28.4570312,49.7421875 L23.5986328,32.9941406 C23.5335283,32.7662749 23.435873,32.4163435 23.3056641,31.9443359 C22.6220669,29.6819548 22.1744802,27.8020908 21.9628906,26.3046875 C21.8652339,27.6556057 21.7513027,28.9942968 21.6210938,30.3208008 C21.4908848,31.6473048 21.3362639,32.96972 21.1572266,34.2880859 L19.0576172,49.7421875 L10,49.7421875 L15.5175781,14 L25.1611328,14 L30.5566406,32.4326172 C30.5891929,32.5628262 30.6542964,32.7744126 30.7519531,33.0673828 C31.2565129,34.7112712 31.5738926,36.1191348 31.7041016,37.2910156 C31.7692061,36.6562468 31.8912751,35.9523151 32.0703125,35.1791992 C32.2493499,34.4060834 32.493488,33.4742893 32.8027344,32.3837891 L38.2470703,14 L47.9150391,14 L53.4082031,49.7421875 Z",
                    id: "M"
                }
            ]
        ],
        [
            "svg",
            {
                ...ui.mxs,
                viewBox: "0 0 300 60",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            },
            [
                "g",
                {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "#000000",
                    "fill-rule": "evenodd"
                },
                [
                    "path",
                    {
                        d:
                            "M3.28,49.4 L3.28,20.88 L8.16,20.88 L8.16,49.4 L3.28,49.4 Z M4.52,14.32 L8.16,11.84 C10.16,14.12 12.88,17.24 14.12,19.32 L10.16,22.12 C9.08,20 6.52,16.68 4.52,14.32 Z M36.88,13.44 L36.88,44.04 C36.88,46.68 36.28,47.88 34.6,48.64 C32.96,49.4 30.4,49.48 26.68,49.44 C26.48,48.16 25.8,46.16 25.12,44.96 C27.44,45.08 30.2,45.08 30.96,45.04 C31.76,45.04 32.04,44.8 32.04,44 L32.04,18 L14.6,18 L14.6,13.44 L36.88,13.44 Z M48.44,12.24 L52.8,13.56 C51.96,16.04 50.96,18.64 49.84,21.12 L49.84,49.44 L45.32,49.44 L45.32,29.44 C44.52,30.64 43.68,31.8 42.8,32.8 C42.4,31.68 41.28,28.92 40.52,27.68 C43.72,23.92 46.68,18.08 48.44,12.24 Z M56.2,23.28 L56.2,28.84 C59.04,28.12 61.6,27.16 63.84,25.88 C62.72,24.88 61.72,23.84 60.88,22.8 C60.16,23.68 59.36,24.48 58.56,25.2 C58.04,24.68 57.08,23.92 56.2,23.28 Z M70.24,19.96 L63.2,19.96 C64.2,21.24 65.48,22.52 67.04,23.64 C68.32,22.56 69.36,21.36 70.24,19.96 Z M78.2,19.96 L75.2,19.96 C74.04,22.24 72.52,24.16 70.76,25.84 C73.24,27.04 76.16,28 79.48,28.52 C78.64,29.4 77.48,31.2 76.92,32.32 C73.24,31.52 70.04,30.16 67.4,28.52 C64.72,30.28 61.64,31.64 58.28,32.64 C57.92,31.92 57,30.68 56.2,29.76 L56.2,42.8 L52.08,42.8 L52.08,17.2 L56.2,17.2 L56.2,21.44 C58.8,19 60.96,15.6 62.2,12.12 L66.52,13.12 C66.12,14.12 65.68,15.16 65.2,16.12 L78.2,16.12 L78.2,19.96 Z M71.52,34.12 L74.92,35.52 C71.76,38.96 66.44,41.36 61,42.76 C60.48,41.88 59.52,40.56 58.68,39.8 C63.68,38.76 68.88,36.76 71.52,34.12 Z M67.6,30.48 L71.08,31.92 C68.6,34.44 64.64,36.32 60.92,37.52 C60.36,36.64 59.32,35.52 58.4,34.8 C61.8,33.92 65.64,32.28 67.6,30.48 Z M74.4,38.64 L78.48,40.28 C74.32,45.16 67.24,47.84 59.08,49.32 C58.56,48.16 57.6,46.6 56.68,45.56 C64.04,44.56 70.96,42.4 74.4,38.64 Z M89.12,33.12 L89.12,35.84 L94.48,35.84 L94.48,33.12 L89.12,33.12 Z M94.48,21 L89.12,21 L89.12,23.36 L94.48,23.36 L94.48,21 Z M89.12,27 L89.12,29.48 L94.48,29.48 L94.48,27 L89.12,27 Z M101.36,35.84 L101.36,40 L81.32,40 L81.32,35.84 L84.84,35.84 L84.84,21 L81.8,21 L81.8,16.84 L84.84,16.84 L84.84,12.56 L89.12,12.56 L89.12,16.84 L94.48,16.84 L94.48,12.56 L98.84,12.56 L98.84,16.84 L101.2,16.84 L101.2,21 L98.84,21 L98.84,35.84 L101.36,35.84 Z M86.32,40.28 L90.76,41.56 C89.44,44.44 87.12,47.44 85.08,49.32 C84.24,48.52 82.4,47.16 81.32,46.52 C83.28,45 85.24,42.56 86.32,40.28 Z M118.72,25.24 L118.72,29.64 L115.28,29.64 L115.28,49.44 L110.76,49.44 L110.76,29.64 L107.08,29.64 L107.08,30.96 C107.08,38.32 106.24,44.92 101.24,50.36 C100.48,49.32 99,48.04 97.92,47.28 C98.4,46.72 98.84,46.16 99.24,45.6 L95.4,47.48 C94.76,46.04 93.24,43.72 92.04,42.08 L95.84,40.32 C97.04,41.88 98.6,43.96 99.36,45.4 C102.28,41.04 102.72,36.04 102.72,30.96 L102.72,16.44 C107.12,15.32 111.96,13.64 114.84,11.92 L118.64,15.32 C115.32,16.96 111.12,18.36 107.08,19.36 L107.08,25.24 L118.72,25.24 Z M134.88,30.8 C134.88,28 137.2,25.68 140,25.68 C142.8,25.68 145.12,28 145.12,30.8 C145.12,33.6 142.8,35.92 140,35.92 C137.2,35.92 134.88,33.6 134.88,30.8 Z M161.4,46 L161.4,16.28 L166.72,16.28 L169.08,26.04 L169.92,30.68 L170.08,30.68 L170.96,26.04 L173.28,16.28 L178.6,16.28 L178.6,46 L174.04,46 L174.04,34.32 C174.04,31.32 174.8,25.04 175.08,22.08 L174.92,22.08 L173.16,29.72 L171.2,37.4 L168.68,37.4 L166.72,29.72 L164.92,22.08 L164.76,22.08 C165.04,25.04 165.88,31.32 165.88,34.32 L165.88,46 L161.4,46 Z M191.24,46.48 C185.8,46.48 181.48,42.2 181.48,34.76 C181.48,27.48 185.84,23.04 190.52,23.04 C195.76,23.04 198.44,27.48 198.44,33.72 C198.44,34.8 198.32,35.92 198.24,36.48 L187.24,36.48 C187.6,40.12 189.4,42 192,42 C193.36,42 194.44,41.6 195.64,40.88 L197.64,44.44 C195.84,45.76 193.56,46.48 191.24,46.48 Z M187.12,32.44 L193.48,32.44 C193.48,29.4 192.56,27.52 190.64,27.52 C188.92,27.52 187.4,29.2 187.12,32.44 Z M201.88,46 L201.88,23.52 L206.64,23.52 L207.04,26.24 L207.2,26.24 C208.56,24.48 210.44,23.04 213.04,23.04 C216.8,23.04 218.4,25.84 218.4,30.8 L218.4,46 L212.44,46 L212.44,31.32 C212.44,28.92 211.96,28 210.52,28 C209.48,28 208.6,28.84 207.8,30.36 L207.8,46 L201.88,46 Z M231.84,46.56 C226.24,46.56 221.84,42.2 221.84,34.76 C221.84,27.28 226.76,23 232.28,23 C234.84,23 236.64,23.92 238.12,25.36 L235.32,29.12 C234.44,28.16 233.68,27.72 232.64,27.72 C229.76,27.72 227.88,30.56 227.88,34.76 C227.88,39 229.88,41.76 232.48,41.76 C233.88,41.76 235.16,41.12 236.16,40.08 L238.48,43.92 C236.6,45.8 234.12,46.56 231.84,46.56 Z M248.8,46 L248.8,28.16 L242.32,28.16 L242.32,23.52 L254.76,23.52 L254.76,46 L248.8,46 Z M251.44,19.88 C249.36,19.88 247.88,18.56 247.88,16.64 C247.88,14.76 249.36,13.36 251.44,13.36 C253.48,13.36 254.96,14.76 254.96,16.64 C254.96,18.56 253.48,19.88 251.44,19.88 Z M266.76,46.48 C263,46.48 261.44,43.68 261.44,38.72 L261.44,23.52 L267.36,23.52 L267.36,38 C267.36,40.4 267.72,41.52 269.24,41.52 C270.28,41.52 271.08,40.68 271.84,39.16 L271.84,23.52 L277.8,23.52 L277.8,46 L273.04,46 L272.64,43.28 L272.48,43.28 C271.08,45.04 269.36,46.48 266.76,46.48 Z M289.6,46.56 C286.44,46.56 283.64,45.28 281.32,43.4 L284,39.72 C286.12,41.24 287.48,42.2 289.68,42.2 C291.76,42.2 292.68,41.16 292.68,39.8 C292.68,38.08 290.64,37.44 288.28,36.4 C285.64,35.28 282.44,33.6 282.44,29.8 C282.44,25.8 285.56,23 290.52,23 C293.88,23 295.88,24.28 297.8,25.72 L295.16,29.28 C293.48,28.12 292.44,27.36 290.64,27.36 C288.84,27.36 287.92,28.28 287.92,29.56 C287.92,31.2 289.84,31.68 292.24,32.68 C294.92,33.76 298.2,35.32 298.2,39.48 C298.2,43.4 295.16,46.56 289.6,46.56 Z",
                        id: "门修斯・Mencius"
                    }
                ]
            ]
        ]
    ];
}
