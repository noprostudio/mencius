import type { AppContext, Opinion } from "../api";
import { eventBtn } from "./event-btn";
import { DELETE_OPINION } from "../events";
import { withSize, EDIT, DELETE } from "@thi.ng/hiccup-carbon-icons";

export function opinionCard(ctx: AppContext, opinion: Opinion) {
    const views = ctx.views;
    const id = decodeURI(ctx.views.route.deref()!.params.id);
    const user = views.user.deref()!;
    return [
        "div",
        {
            class:
                "flex flex-col px-12 py-10 w-full border-t-2 border-gray-200",
        },
        [
            "div",
            { class: "flex flex-col ml-4 md:ml-6" },
            [
                "div",
                { class: "my-3 flex flex-row justify-between items-center" },
                [
                    "div",
                    { class: "flex flex-row justify-start items-center" },
                    [
                        "img",
                        {
                            class: "h-8 w-8 md:h-10 md:w-10 rounded-full",
                            src: opinion.user_avatar_url
                                ? opinion.user_avatar_url
                                : "https://subjpop.com/images/sidebar-logo.png",
                        },
                    ],
                    [
                        "div",
                        { class: "ml-3 flex flex-col" },
                        ["div", { class: "font-semibold" }, opinion.user_name],
                        [
                            "div",
                            { class: "text-gray-700 text-sm" },
                            `@${opinion.github_handler.toLowerCase()}`,
                        ],
                        // [
                        //     "div",
                        //     { class: "text-gray-700 text-sm" },
                        //     opinion.user_bio,
                        // ],
                    ],
                ],
                user.login == opinion.github_handler
                    ? [
                          "div",
                          { class: "flex flex-row items-top text-gray-500" },
                          [
                              eventBtn,
                              [],
                              {
                                  class:
                                      "ml-2 focus:outline-none hover:text-gray-700",
                              },
                              [
                                  "span",
                                  {
                                      class: "inline-block w-full fill-current",
                                  },
                                  withSize(EDIT, "20"),
                              ],
                          ],
                          [
                              eventBtn,
                              [
                                  DELETE_OPINION,
                                  { id, userName: user.login, data: opinion },
                              ],
                              {
                                  class:
                                      "ml-4 focus:outline-none hover:text-gray-700",
                              },
                              [
                                  "div",
                                  { class: "inline-block w-full fill-current" },
                                  withSize(DELETE, "20"),
                              ],
                          ],
                      ]
                    : [],
            ],
            [
                "div",
                { class: "leading-relaxed flex flex-col" },
                [
                    "h2",
                    { class: "font-medium text-gray-800 text-lg" },
                    opinion.translation,
                ],
                [
                    "p",
                    { class: "text-gray-600 mt-1 text-sm md:text-base" },
                    opinion.details,
                ],
            ],
            [
                "div",
                { class: "mt-4" },
                [
                    "button",
                    {
                        class:
                            "bg-transparent hover:bg-purple-300 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded",
                    },
                    "👍42",
                ],
                [
                    "button",
                    {
                        class:
                            "bg-transparent hover:bg-purple-300 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded mx-2",
                    },
                    "👎0",
                ],
            ],
        ],
    ];
}
