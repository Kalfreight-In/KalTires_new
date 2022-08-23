"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./Components/Footer.jsx

/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable react/jsx-curly-newline */ /* eslint-disable comma-dangle */ /* eslint-disable implicit-arrow-linebreak */ /* eslint-disable @next/next/no-html-link-for-pages */ 

// import {SiInstagram} from 'react-icons/si';



const Footer = ()=>{
    const { 0: Hinventery , 1: setHinventery  } = (0,external_react_.useState)(false);
    const { 0: SethWa  } = (0,external_react_.useState)(false);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: Hquicklinks , 1: setHquicklinks  } = (0,external_react_.useState)(false);
    const { 0: Hcontactus , 1: setHcontactus  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-footerbackground md:bg-cover bg-contain bg-black block",
        style: {
            backgroundImage: 'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Footer.png?token=GHSAT0AAAAAABXLNQCYVWP757NGILMZFAV2YXSWO6Q)',
            backgroundBlendMode: 'difference',
            backgroundPosition: 'center',
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'full'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-20s md:p-0 xl:block flex justify-center ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/NavLogo.png?token=GHSAT0AAAAAABXLNQCYFS4TDD6SA7WIQEWCYXSWPRA",
                    alt: "logo",
                    className: "2xl:h-24 xl:h-20 h-16 xl:hidden flex md:ml-0 xl:ml-36 mt-4"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex md:flex-row flex-col-reverse 2xl:pb-8 xl:pt-8 md:pt-4 md:flex md:justify-between md:bg-cover bg-contain",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "xl:flex xl:flex-wrap xl:-mx-4 pt-2 xl:pb-2 w-screen",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-info xl:w-3/12 xl:px-4 xl:block hidden items- start justify- start",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "xl:ml-16 w-max justify- start ml-4 xl:mt-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/NavLogo.png?token=GHSAT0AAAAAABXLNQCYFS4TDD6SA7WIQEWCYXSWPRA",
                                                alt: "logo",
                                                className: "2xl:h-28 xl:h-24 h-20 md:block hidden",
                                                to: "mailto:umarkhurshid3@gmail.com"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-white flex justify-start xl:mt-12 ml-0 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-8",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "tel:8003858006",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(io_.IoMdMail, {
                                                            className: "md:h-8 h-6 md:w-8 w-6 "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block xl:ml-0 ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex justify-start items-start text-left -ml-6 font-medium",
                                                            children: "Reach out to us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "md:text-xl text-16px ml-2 xl:ml-4 text-xl md:font-bold font-semibold cursor-pointer",
                                                            children: "info@kaltire.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-white flex xl:justify- start justify-start mt-4 md:ml-0 ml-0 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "tel:8009770010",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdPhone, {
                                                            className: "md:h-8 h-6 md:w-8 w-6 "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "ml-4 flex flexcenter",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "tel:8009770010",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: [
                                                            ' ',
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "md:text-xl xl:text-xl text-xl xl:font-bold font-semibold ml-2 ",
                                                                children: "800-385-8006"
                                                            }),
                                                            ' '
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-white flex xl:justify- start justify-start mt-4 md:ml-0 ml-0 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "tel:8009770010",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {
                                                            className: "md:h-8 h-6 md:w-8 w-6 "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "ml-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "tel:8009770010",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: [
                                                            ' ',
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "md:text-xl xl:text-xl text-xl xl:font-bold font-semibold ml-2 ",
                                                                children: [
                                                                    "Headquarters: 10156 Live Oak Ave ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " Fontana, CA 92335"
                                                                ]
                                                            }),
                                                            ' '
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-white flex mb-8 xl:mb-2 pt-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: " ml-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full md:ml-0 ml:-0 ",
                                                    children: "English, ਪੰਜਾਬੀ, Espa\xf1ol, हिन्दी, Fran\xe7ais"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " xl:w-3/6 md:px-4 ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sm:flex",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sm:flex-1 mt-4 sm:mt-0 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-white cursor-pointer",
                                                    onClick: ()=>{
                                                        setHinventery(!Hinventery);
                                                        SethWa(false);
                                                        setHquicklinks(false);
                                                        setHcontactus(false);
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left text-center ",
                                                        children: "Who we are?"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `text-white  2xl:leading-8 leading-6 xl:block   ${Hinventery ? '' : 'hidden'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "/",
                                                            className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-xl px-1",
                                                                    children: " "
                                                                }),
                                                                "Company Overview"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                                            to: "corevaluemain",
                                                            smooth: true,
                                                            duration: 1000,
                                                            spy: true,
                                                            offset: -80,
                                                            className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-xl px-1",
                                                                    children: " "
                                                                }),
                                                                "Core Values"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "https://kalfreight.com/who-we-are/csr",
                                                            className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center ",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-xl px-1",
                                                                    children: " "
                                                                }),
                                                                "CSR"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sm:flex-1 mt-4 sm:mt-0 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-white cursor-pointer",
                                                    onClick: ()=>{
                                                        setHinventery(false);
                                                        setHquicklinks(!Hquicklinks);
                                                        SethWa(false);
                                                        setHcontactus(false);
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left text-center ",
                                                        children: "Inventory"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `text-white  2xl:leading-8 leading-6 xl:block  ${Hquicklinks ? '' : 'hidden'}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "https://kaltrailers.com/product-category/trucks/",
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center ",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-xl px-1",
                                                                        children: " "
                                                                    }),
                                                                    "Flatbed for sale"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "https://kaltrailers.com/product-tag/dry-van/",
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center ",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-xl px-1",
                                                                        children: " "
                                                                    }),
                                                                    "Used Dry van for sale"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "https://kaltrailers.com/product-tag/reefer/",
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center ",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-xl px-1",
                                                                        children: " "
                                                                    }),
                                                                    "Reefer Trailer for sale"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "https://kaltrailers.com/product-category/trailers/new-trailers/",
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center ",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-xl px-1",
                                                                        children: " "
                                                                    }),
                                                                    "New Trailers for sale"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "https://kaltrailers.com/product-category/trucks/used-trucks/",
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-xl px-1",
                                                                        children: " "
                                                                    }),
                                                                    "Used Trucks for sale"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex-1 block xl:block mt-4 sm:mt-0 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-white cursor-pointer",
                                                    onClick: ()=>{
                                                        setHinventery(false);
                                                        setHquicklinks(false);
                                                        SethWa(false);
                                                        setHcontactus(!Hcontactus);
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: " md:font-bold font-normal xl:text-left text-center 2xl:text-footerheading text-desc md:ml-0 pl-0 ",
                                                        children: "Quick Links"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `text-white 2xl:leading-10 leading-6 xl:block    ${Hcontactus ? '' : 'hidden'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex flex-row space-x-2 align-center justify-center xl:justify-start mt-1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover xl:text-left text-center md:ml-0 ml-8 ",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "flex cursor-pointer ",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-xl px-1 md:mt-0 mt-QuickLinkarrow"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "mt-5px lg:leading-7",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                                                    to: "ContactSection",
                                                                                    smooth: true,
                                                                                    duration: 1000,
                                                                                    spy: true,
                                                                                    offset: -80,
                                                                                    children: "Careers"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:hr@bigrigcanada.com",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover xl:text-left text-center md:ml-0 ml-8"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-row space-x-2 align-center justify-center xl:justify-start mt-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover xl:text-left text-center md:ml-0 ml-8",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xl px-1 md:mt-0 mt-QuickLinkarrow"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                                            to: "NewsRoom",
                                                                            smooth: true,
                                                                            duration: 1000,
                                                                            spy: true,
                                                                            offset: -80,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "mt-5px lg:leading-7",
                                                                                children: "Newsroom"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-row space-x-2 align-center justify-center xl:justify-start mt-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "block md:text-sm text-navsmall hover:text-yellow-shadowhover xl:text-left text-center md:ml-0 ml-8",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xl px-1 md:mt-0 mt-QuickLinkarrow"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "https://kalfreight.com/what-we-do",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "mt-5px lg:leading-7",
                                                                                children: "Services"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-row space-x-2 align-center justify-center xl:justify-start mt-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: " antialiased w-max block md:text-sm text-navsmall hover:text-yellow-shadowhover xl:text-left text-center md:ml-0 ml-8",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xl px-1 md:mt-0 mt-QuickLinkarrow"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "https://kaltrailers.com/credit-application/",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "mt-5px lg:leading-7",
                                                                                children: "Credit Application"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-row space-x-2 align-center justify-center xl:justify-start mt-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: " antialiased w-max block md:text-sm text-navsmall hover:text-yellow-shadowhover xl:text-left text-center md:ml-0 ml-8",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xl px-1 md:mt-0 mt-QuickLinkarrow"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "http://kaltires.com/#Advantages",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "mt-5px lg:leading-7",
                                                                                children: "24x7 Roadside Assistance"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " xl:flex-1 flex-1 xl:w-2/12 hidden xl:flex md:justify-end justify-center mr-12 ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-white cursor-pointer",
                                            onClick: ()=>{
                                                setHinventery(false);
                                                setHquicklinks(false);
                                                SethWa(false);
                                                setHcontactus(!Hcontactus);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: " md:font-bold font-normal xl:text-left text-center 2xl:text-footerheading text-desc md:ml-0 pl-0 ",
                                                children: "For latest news & updates"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `text-white 2xl:leading-8 leading-6 xl:block ${Hcontactus ? '' : 'hidden'}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: " mt-8",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "w-full ",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            onChange: (e)=>setEmail(e.target.value)
                                                            ,
                                                            value: email,
                                                            className: "appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                                            id: "email",
                                                            placeholder: "Email Address",
                                                            type: "email",
                                                            required: true
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex flex-row space-x-2 align-center justify-center xl:justify-end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/",
                                                        className: "block md:text-xl text-navsmall font-semibold hover:text-yellow-shadowhover mt-1 xl:text-left text-center",
                                                        children: "Subscribe Now"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "mainiconcontainer",
                                                    className: " justify-end mt-20 ",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        id: "allicons",
                                                        className: "flex justify-end",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(io_.IoLogoFacebook, {
                                                                onClick: ()=>window.open('https://www.facebook.com/kaltireusa', '_blank')
                                                                ,
                                                                className: "text-white hover:text-footersocialnew h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiInstagramFill, {
                                                                onClick: ()=>window.open('https://www.instagram.com/kaltireusa/', '_blank')
                                                                ,
                                                                className: "text-white hover:text-instafooterhover h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(io_.IoLogoLinkedin, {
                                                                onClick: ()=>window.open('https://www.linkedin.com/company/kal-trailers-and-leasing', '_blank')
                                                                ,
                                                                className: "text-white hover:text-linkdenfooterhover h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-info xl:w-1/3 md:px-4 xl:hidden flex items-center justify-center mt-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "xl:ml-16 w-max justify-center items-center flex flex-col ml-4 xl:mt-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/NavLogo.png?token=GHSAT0AAAAAABXLNQCYFS4TDD6SA7WIQEWCYXSWPRA",
                                                alt: "logo",
                                                className: "2xl:h-28 xl:h-24 h-20 xl:block hidden",
                                                to: "mailto:umarkhurshid3@gmail.com"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "md:flex block md:flex-row gap-x-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-white flex justify-center xl:mt-12 mt-4 ml-0 ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mt-0",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:info@kaltire.com",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdEmail, {
                                                                    className: "md:h-8 h-6 md:w-8 w-6 "
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block xl:ml-3 ml-2 text-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "md:text-xl text-lg font-bold xl:font-semibold text-center",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:info@kaltire.com",
                                                                    children: "info@kaltire.com"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-white flex xl:justify-center justify-start mt-4 md:ml-0 ml- ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mt-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:8009770010",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdPhone, {
                                                                    className: "md:h-6 h-6 md:w-6 w-6 "
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "ml-4 flex flexstart",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "tel:8009770010",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: [
                                                                    ' ',
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "md:text-2xl text-lg font-bold xl:font-semibold ",
                                                                        children: "800-385-8006"
                                                                    }),
                                                                    ' '
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-white flex mb-8 xl:mb-2 pt-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "xl:ml-4 ml-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full md:ml-0 xl:ml-12 ml:-0 ",
                                                    children: "English, ਪੰਜਾਬੀ, Espa\xf1ol, हिन्दी, Fran\xe7ais"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-white cursor-pointer",
                                                    onClick: ()=>{
                                                        setHinventery(false);
                                                        setHquicklinks(false);
                                                        SethWa(false);
                                                        setHcontactus(!Hcontactus);
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: " md:font-semibold xl:text-left text-center text-Description text-lg md:ml-0 pl-0 ",
                                                        children: "For latest news & updates"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-white 2xl:leading-8 leading-6 xl:block ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: " mt-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "w-full ",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    onChange: (e)=>setEmail(e.target.value)
                                                                    ,
                                                                    value: email,
                                                                    className: "appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                                                    id: "email",
                                                                    placeholder: "Email Address",
                                                                    type: "email",
                                                                    required: true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-row align-center justify-center xl:justify-end",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/",
                                                                to: "",
                                                                className: "block md:text-xl text-navsmall font-normal hover:text-yellow-shadowhover text-Description text-center",
                                                                children: "Subscribe Now"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "mainiconcontainer",
                                            className: " justify-end pb-4 mt-4 ",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                id: "allicons",
                                                className: "flex justify-between ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(io_.IoLogoFacebook, {
                                                        onClick: ()=>window.open('https://www.facebook.com/kaltireusa', '_blank')
                                                        ,
                                                        className: "text-white hover:text-footersocialnew h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiInstagramFill, {
                                                        onClick: ()=>window.open('https://www.instagram.com/kaltireusa/', '_blank')
                                                        ,
                                                        className: "text-white hover:text-instafooterhover h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(io_.IoLogoLinkedin, {
                                                        onClick: ()=>window.open('https://www.linkedin.com/company/kal-trailers-and-leasing', '_blank')
                                                        ,
                                                        className: "text-white hover:text-linkdenfooterhover h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const Components_Footer = (Footer);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/upperbar/Navbar.jsx

// import { useState, useEffect, useContext } from 'react';


// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
const Navbar = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    // console.log(`lolllllllllllllllll ${router.pathname}`);
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "bg-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flexBetween z-10 mx-20 flex-row",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-8 flex flex-row justify-start items-center cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `  ${router.pathname === '/' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/AboutUs' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `  ${router.pathname === '/AboutUs' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "About Us"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/WhatWeOffer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/WhatWeOffer' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `  ${router.pathname === '/WhatWeOffer' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "What We Offer"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/Inventory' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `  ${router.pathname === '/Inventory' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "Inventory"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/RoadsideAssistance",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/RoadsideAssistance' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `  ${router.pathname === '/RoadsideAssistance' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500 '}  `,
                                children: "Roadside Assistance"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/Locations' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `  ${router.pathname === '/Locations' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "Locations"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/CreditApplication' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `text-black  ${router.pathname === '/CreditApplication' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "Credit Application"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/career",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `group border-solid  border-r px-10 py-3 border-grey  ${router.pathname === '/career' ? 'bg-red-500' : ''}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `text-black  ${router.pathname === '/career' ? 'text-white font-bold group-hover:text-white' : 'group-hover:text-red-500'}  `,
                                children: "Career"
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const upperbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./Assets/Images/NavLogo.png
/* harmony default export */ const NavLogo = ({"src":"/_next/static/media/NavLogo.c226bd2d.png","height":92,"width":270,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYUlEQVR42mP4z8DAvSRqtm1D6nqdN9LKkh/5GbgZkEFO1vYm3aKjVYLFx0sYys/GfBBiMH4jo2r1RlZdGqhBloGh9GQ/Q8mJdrHi450MpacmvpVWcngrpVgMVFT/Rlq5GQDQtiEAlBKwugAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./Assets/Icons/live_chat-icon.png
/* harmony default export */ const live_chat_icon = ({"src":"/_next/static/media/live_chat-icon.c7101cac.png","height":56,"width":59,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtklEQVR42mWNrQoCQRSFR7NZhZm0cxEEk8m0YZP6BgZ/woLBKlsUbaIGF2wbfAdBq8Hmw8z6DH4XbHvhY86cc2au0Smt70ESnMSllTg41X7wbUd1DfulkwfhLlh/DA6sbNF3/LEWRogMIyW4USzQa/QSvTCECaU95gnjDS90ARnMKPghezdcpnx/5WXOuYIUb64ruphPOGNeggUnB/wP58ToEDShw08RK4WwBbkWdEXNVOf/UBo/h+ZXs/B8TC8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./Components/upperbar/Topbar.jsx






const Topbar = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-black",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flexBetween z-10 mx-20 p-3 flex-row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ml-8 flex-1 lg:flex flex-row justify-start items-center hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: NavLogo,
                            alt: "place",
                            objectFit: "contain",
                            className: "cursor-pointer"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pt-2 relative mx-auto text-gray-600",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "border-2 border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none",
                                    type: "search",
                                    name: "search",
                                    placeholder: "Search"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "absolute right-0 top-0 mt-5 mr-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaSearch, {
                                        color: "red"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-white flex flex-1 justify-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pr-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: live_chat_icon,
                                alt: "LiveChat",
                                objectFit: "contain",
                                className: "cursor-pointer"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-bold",
                                    children: "Live Chat"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "",
                                    children: "Chat with experts"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    })
;
/* harmony default export */ const upperbar_Topbar = (Topbar);

;// CONCATENATED MODULE: external "react-icons/go"
const go_namespaceObject = require("react-icons/go");
;// CONCATENATED MODULE: ./Components/upperbar/TopUpbar.jsx



// import Image from 'next/image';

const TopUpbar = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-tire-gray-3 ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flexBetween z-10 mx-20 p-3 flex-row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row flexCenter",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-white font-bold ml-8",
                                children: "Indianapolis, IN"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ml-2 font-bold",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(go_namespaceObject.GoLocation, {
                                    color: "white "
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-white",
                        children: "Help"
                    })
                })
            ]
        })
    })
;
/* harmony default export */ const upperbar_TopUpbar = (TopUpbar);

;// CONCATENATED MODULE: ./Components/index.js






;// CONCATENATED MODULE: ./pages/_app.js

// import Script from 'next/script';



const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(upperbar_TopUpbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(upperbar_Topbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(upperbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {})
        ]
    })
;
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(5018)));
module.exports = __webpack_exports__;

})();