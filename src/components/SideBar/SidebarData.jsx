import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiOutlineBeaker from "react-icons/hi";
import * as LiaCottonBureau from "react-icons/lia";

export const SidebarData = [
  {
    title: "Уход",
    path: "/about-us",
    icon: <HiOutlineBeaker.HiColorSwatch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Для глаз",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:   [
          {
            title: "Маски",
            path: "/about-us/vision",
            icon: <IoIcons.IoIosPaper />,
          },
        ]
      },
      {
        title: "Активы",
        path: "/about-uswn",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:   [
              {
                title: "Маски",
                path: "/about-us/vision",
                icon: <IoIcons.IoIosPaper />,
              },
            ]
      },
    ],
  },
  {
    title: "Декоративная косметика",
    path: "/services",
    icon: <LiaCottonBureau.LiaCottonBureau />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Для глаз",
        path: "/services/services1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Маски",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Консилер",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Парфюмерия",
    path: "/contact",
    icon: <HiOutlineBeaker.HiOutlineBeaker />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Нишевая парфюмерия",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Мужской парфюм",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Женский парфюм",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Унисекс",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Ароматы для дома",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Диффузоры",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Свечи",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: "Акции",
    path: "/events",
    icon: <IoIcons.IoMdPricetag />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

export const SidebarDataFooter = [
  {
    title: "Поддержка",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Контакты",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Our Aim",
        path: "/contact/aim",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Our Vision",
        path: "/contact/vision",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
