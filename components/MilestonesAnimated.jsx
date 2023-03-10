import {
  Box,
  Grid,
  GridItem,
  keyframes,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
// import { motion } from "framer-motion";
import React, { useState } from "react";
import { MilestoneLarge, MilestoneSmall } from "./Icons";

const templateColumns = {
  md: "repeat(25,1fr)",
  xl: "repeat(23,1fr)",
  "2xl": "repeat(25,1fr)",
};
const marginLeft = "0.5rem";
const quarterOpacity = "40%";
const yearTextProps = {
  _hover: {
    cursor: "pointer",
  },
  fontWeight: { md: 400, xl: 600 },
};
const quarterTextProps = {
  opacity: quarterOpacity,
  fontWeight: 500,
  marginLeft: marginLeft,
};

const milestoneLargeProps = {
  _hover: {
    cursor: "pointer",
  },
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

const milestoneSmallProps = {
  marginLeft: marginLeft,
  justifyContent: "start",
  alignItems: "center",
};

const infoSingleProps = {
  marginLeft: { md: "0.75rem", xl: "0.65rem" },
  opacity: quarterOpacity,
};

const colSpan = {
  "2020_Q1": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2020_Q4": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2021_Q1": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2021_Q3": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2021_Q4": { md: 3, lg: 4, xl: 3, "2xl": 4 },
  "2022_Q1": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2022_Q3": { md: 4, lg: 5, xl: 3, "2xl": 4 },
  "2022_Q4": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2023_Q1": { md: 4, lg: 4, xl: 3, "2xl": 4 },
  "2023_Q2": { md: 4, lg: 4, xl: 3, "2xl": 4 },
};

function MilestonesAnimated() {
  const [isUnCollapsed, setIsUnCollapsed] = useState({
    2020: false,
    2021: false,
    2022: false,
    2023: true,
  });

  const [isUnCollapsedDisplay, setIsUnCollapsedDisplay] = useState({
    2020: false,
    2021: false,
    2022: false,
    2023: true,
  });

  const sleep = async (ms) => {
    // new Promise()
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const onClickHandler = async (year) => {
    if (isUnCollapsed[year]) {
      setIsUnCollapsed((oldValue) => {
        const newValue = { ...oldValue };
        newValue[year] = false;
        return newValue;
      });
      setTimeout(() => {
        setIsUnCollapsedDisplay((oldValue) => {
          const newValue = { ...oldValue };
          newValue[year] = false;
          return newValue;
        });
      }, 400);
    } else {
      const alreadyUncollapsedYear = ["2020", "2021", "2022", "2023"].filter(
        (year) => isUnCollapsed[year]
      );
      // alreadyUncollapsedYears.forEach((year) => onClickHandler(year));

      if (alreadyUncollapsedYear?.length > 0) {
        await onClickHandler(alreadyUncollapsedYear[0]);
        await sleep(400);
      }
      setIsUnCollapsedDisplay((oldValue) => {
        const newValue = { ...oldValue };
        newValue[year] = true;
        return newValue;
      });
      setIsUnCollapsed((oldValue) => {
        const newValue = { ...oldValue };
        newValue[year] = true;
        return newValue;
      });
    }
  };

  const fadeInQuarterText = keyframes`
  0% { opacity:0%; transform:translateX(-15px)}
  100% {  opacity:40%; transform:translateX(+0px)}
`;

  const fadeInQuarterIcon = keyframes`
    0% { opacity:0%; transform:translateX(-15px)}
    100% {  opacity:100%; transform:translateX(+0px)}
  `;

  const fadeOutQuarterText = keyframes`
  0% { opacity:40%;}
  100% {  opacity:0%; transform:translateX(-15px) }
`;

  const fadeOutQuarterIcon = keyframes`
    0% { opacity:100%;}
    100% {  opacity:0%; transform:translateX(-15px); }
  `;

  const fadeInList = keyframes`
  0% { opacity:0%; transform:translateX(-15px)}
  100% {  opacity:100%; transform:translateX(+0px)}
`;

  const fadeOutList = keyframes`
  0% { opacity:100%;}
  100% {  opacity:0%;transform:translateX(-15px) }
`;

  const animationTextProps2020 = {
    animation: `${
      isUnCollapsed["2020"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.4s`,
  };

  const animationIconProps2020 = {
    animation: `${
      isUnCollapsed["2020"] ? fadeInQuarterIcon : fadeOutQuarterIcon
    } 0.4s`,
  };
  const animationTextProps2021 = {
    animation: `${
      isUnCollapsed["2021"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.4s`,
  };

  const animationIconProps2021 = {
    animation: `${
      isUnCollapsed["2021"] ? fadeInQuarterIcon : fadeOutQuarterIcon
    } 0.4s`,
  };

  const animationTextProps2022 = {
    animation: `${
      isUnCollapsed["2022"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.4s`,
  };

  const animationIconProps2022 = {
    animation: `${
      isUnCollapsed["2022"] ? fadeInQuarterIcon : fadeOutQuarterIcon
    } 0.4s`,
  };

  const animationTextProps2023 = {
    animation: `${
      isUnCollapsed["2023"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.4s`,
  };

  const animationIconProps2023 = {
    animation: `${
      isUnCollapsed["2023"] ? fadeInQuarterIcon : fadeOutQuarterIcon
    } 0.4s`,
  };

  const animationListProps2020 = {
    animation: `${!isUnCollapsed["2020"] ? fadeInList : fadeOutList} 0.5s`,
  };

  const animationListProps2021 = {
    animation: `${!isUnCollapsed["2021"] ? fadeInList : fadeOutList} 0.5s`,
  };

  const animationListProps2022 = {
    animation: `${!isUnCollapsed["2022"] ? fadeInList : fadeOutList} 0.5s`,
  };

  const animationListProps2023 = {
    animation: `${!isUnCollapsed["2023"] ? fadeInList : fadeOutList} 0.5s`,
  };

  return (
    <Box
      paddingY={{ base: "4rem", md: "3rem", xl: "5rem" }}
      display={{ base: "none", md: "flex" }}
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Box
        bgImage="/illustrations/milestone_background.png"
        bgRepeat="no-repeat"
        backgroundSize="100% 100%"
        width={{ base: "90%", xl: "85%", "2xl": "80%" }}
        borderRadius="0.5rem"
        marginInline="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX={{ base: "1rem", md: "2rem", xl: "4rem" }}
        paddingY={{ base: "3rem", md: "2rem", xl: "4rem" }}
      >
        <VStack
          borderRadius="0.5rem"
          paddingY={{ base: "2rem", md: "2.5rem", xl: "4rem", "2xl": "6rem" }}
          paddingX={{ base: "1rem", md: "2rem", xl: "4rem", "2xl": "6rem" }}
          width="100%"
          bgColor="featured_by-background"
          spacing={{ base: "2rem", xl: "32" }}
        >
          <Text
            fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
            textColor="white"
            fontWeight={500}
          >
            Milestones
          </Text>
          <VStack spacing="5rem">
            <VStack spacing="1rem" width="100%">
              <Grid // the real thing starts
                as="motion.div"
                layout
                templateColumns={templateColumns}
                width="100%"
                paddingX="1rem"
                color="white"
                fontSize={{ md: "0.75rem", lg: "0.8rem", xl: "1rem" }}
              >
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={{
                    md: isUnCollapsedDisplay["2020"] ? 1 : 4,
                    lg: isUnCollapsedDisplay["2020"] ? 1 : 3,
                    "2xl": isUnCollapsedDisplay["2020"] ? 1 : 4,
                  }}
                  onClick={async () => {
                    await onClickHandler(2020);
                  }}
                  {...yearTextProps}
                >
                  {/* 2020 */}
                  2020
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2020_Q1"]}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  {...animationTextProps2020}
                  {...quarterTextProps}
                >
                  Q1
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2020_Q4"]}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  {...animationTextProps2020}
                  {...quarterTextProps}
                >
                  Q1-Q4
                </GridItem>

                <GridItem
                  as="motion.div"
                  layout
                  colSpan={{
                    md: isUnCollapsedDisplay["2021"] ? 2 : 5,
                    lg: isUnCollapsedDisplay["2021"] ? 1 : 4,
                    xl: isUnCollapsedDisplay["2021"] ? 2 : 5,
                    "2xl": isUnCollapsedDisplay["2021"] ? 1 : 4,
                  }}
                  onClick={async () => {
                    await onClickHandler(2021);
                  }}
                  marginLeft={marginLeft}
                  {...yearTextProps}
                >
                  {/* 2021 */}
                  2021
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  colSpan={colSpan["2021_Q1"]}
                  {...animationTextProps2021}
                  {...quarterTextProps}
                >
                  Q1
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2021_Q3"]}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationTextProps2021}
                  {...quarterTextProps}
                >
                  Q3
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2021_Q4"]}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationTextProps2021}
                  {...quarterTextProps}
                >
                  Q4
                </GridItem>

                <GridItem
                  as="motion.div"
                  layout
                  colSpan={{
                    md: isUnCollapsedDisplay["2022"] ? 2 : 7,
                    lg: isUnCollapsedDisplay["2022"] ? 2 : 7,
                    xl: isUnCollapsedDisplay["2022"] ? 2 : 5,
                    "2xl": isUnCollapsedDisplay["2022"] ? 1 : 5,
                  }}
                  onClick={async () => {
                    await onClickHandler(2022);
                  }}
                  marginLeft={marginLeft}
                  {...yearTextProps}
                >
                  {/* 2022 */}
                  2022
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q1"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...quarterTextProps}
                >
                  Q1
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q3"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...quarterTextProps}
                >
                  Q2
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q4"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...quarterTextProps}
                >
                  Q3
                </GridItem>

                <GridItem
                  as="motion.div"
                  layout
                  colSpan={{
                    md: isUnCollapsedDisplay["2022"] ? 2 : 7,
                    lg: isUnCollapsedDisplay["2022"] ? 2 : 7,
                    xl: isUnCollapsedDisplay["2022"] ? 2 : 5,
                    "2xl": isUnCollapsedDisplay["2022"] ? 1 : 5,
                  }}
                  onClick={async () => {
                    await onClickHandler(2022);
                  }}
                  marginLeft={marginLeft}
                  {...yearTextProps}
                >
                  {/* 2022 */}
                  2023
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q1"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...quarterTextProps}
                >
                  Q1
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q3"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...quarterTextProps}
                >
                  Q2
                </GridItem>
              </Grid>

              <Box
                borderRadius="0.5rem"
                height="0.5rem"
                paddingX="1rem"
                width="100%"
                bgColor="#CDC0FF"
                display="flex"
                alignItems="center"
              >
                <Grid
                  as="motion.div"
                  layout
                  templateColumns={templateColumns}
                  width="100%"
                  color="white"
                  alignItems="center"
                >
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={{
                      md: isUnCollapsedDisplay["2020"] ? 1 : 4,
                      lg: isUnCollapsedDisplay["2020"] ? 1 : 3,
                      "2xl": isUnCollapsedDisplay["2020"] ? 1 : 4,
                    }}
                    onClick={async () => {
                      await onClickHandler(2020);
                    }}
                    {...milestoneLargeProps}
                  >
                    {/* 2020 */}
                    <MilestoneLarge />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2020_Q1"]}
                    display={isUnCollapsedDisplay["2020"] ? "flex" : "none"}
                    {...animationIconProps2020}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2020_Q4"]}
                    display={isUnCollapsedDisplay["2020"] ? "flex" : "none"}
                    {...animationIconProps2020}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={{
                      md: isUnCollapsedDisplay["2021"] ? 2 : 5,
                      lg: isUnCollapsedDisplay["2021"] ? 1 : 4,
                      xl: isUnCollapsedDisplay["2021"] ? 2 : 5,
                      "2xl": isUnCollapsedDisplay["2021"] ? 1 : 4,
                    }}
                    onClick={async () => {
                      await onClickHandler(2021);
                    }}
                    marginLeft={marginLeft}
                    {...milestoneLargeProps}
                  >
                    {/* 2021 */}
                    <MilestoneLarge />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2021_Q1"]}
                    display={isUnCollapsedDisplay["2021"] ? "flex" : "none"}
                    {...animationIconProps2021}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2021_Q3"]}
                    display={isUnCollapsedDisplay["2021"] ? "flex" : "none"}
                    {...animationIconProps2021}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>

                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2021_Q4"]}
                    display={isUnCollapsedDisplay["2021"] ? "flex" : "none"}
                    {...animationIconProps2021}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={{
                      md: isUnCollapsedDisplay["2022"] ? 2 : 7,
                      lg: isUnCollapsedDisplay["2022"] ? 2 : 7,
                      xl: isUnCollapsedDisplay["2022"] ? 2 : 5,
                      "2xl": isUnCollapsedDisplay["2022"] ? 1 : 6,
                    }}
                    onClick={async () => {
                      await onClickHandler(2022);
                    }}
                    {...milestoneLargeProps}
                    marginLeft={marginLeft}
                  >
                    {/* 2022 */}
                    <MilestoneLarge />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2022_Q1"]}
                    display={isUnCollapsedDisplay["2022"] ? "flex" : "none"}
                    {...animationIconProps2022}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2022_Q3"]}
                    display={isUnCollapsedDisplay["2022"] ? "flex" : "none"}
                    {...animationIconProps2022}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>

                  <GridItem
                    as="motion.div"
                    layout
                    colSpan={colSpan["2022_Q4"]}
                    display={isUnCollapsedDisplay["2022"] ? "flex" : "none"}
                    {...animationIconProps2022}
                    {...milestoneSmallProps}
                  >
                    <MilestoneSmall fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    as="motion.div"
                    layout
                    {...milestoneLargeProps}
                    colSpan={1}
                    marginLeft={marginLeft}
                  >
                    <MilestoneLarge />
                  </GridItem>
                  {/* <GridItem
                  as="motion.div"
                layout 
                    {...milestoneLargeProps}
                    colSpan={1}
                    marginLeft={marginLeft}
                  >
                    <MilestoneLarge />
                  </GridItem>
                  <GridItem
                  as="motion.div"
                layout 
                    colSpan={1}
                    {...milestoneLargeProps}
                    marginLeft={marginLeft}
                  >
                    <MilestoneLarge />
                  </GridItem> */}
                </Grid>
              </Box>
              <Grid
                as="motion.div"
                layout
                templateColumns={templateColumns}
                width="100%"
                color="white"
                paddingX="1rem"
                fontSize={{ md: "0.75rem", lg: "0.8rem", xl: "0.9rem" }}
                fontWeight={600}
              >
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={{
                    md: isUnCollapsedDisplay["2020"] ? 1 : 4,
                    lg: isUnCollapsedDisplay["2020"] ? 1 : 3,
                    "2xl": isUnCollapsedDisplay["2020"] ? 1 : 4,
                  }}
                  marginLeft={"0.5rem"}
                  opacity={quarterOpacity}
                >
                  <UnorderedList
                    display={isUnCollapsedDisplay["2020"] ? "none" : "block"}
                    {...animationListProps2020}
                  >
                    <ListItem>Problem Discovery</ListItem>{" "}
                    <ListItem>Research Phase</ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2020_Q1"]}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  {...animationTextProps2020}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Problem Discovery</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2020_Q4"]}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  {...animationTextProps2020}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Research Phase</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={{
                    md: isUnCollapsedDisplay["2021"] ? 2 : 5,
                    lg: isUnCollapsedDisplay["2021"] ? 1 : 4,
                    xl: isUnCollapsedDisplay["2021"] ? 2 : 5,
                    "2xl": isUnCollapsedDisplay["2021"] ? 1 : 4,
                  }}
                  marginLeft={"1rem"}
                  opacity={quarterOpacity}
                >
                  <UnorderedList
                    // paddingLeft={"0.5rem"}
                    display={isUnCollapsedDisplay["2021"] ? "none" : "block"}
                    {...animationListProps2021}
                  >
                    <ListItem>Whitepaper v0.1.0</ListItem>{" "}
                    <ListItem>First Prototype</ListItem>{" "}
                    <ListItem>Seed Round</ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2021_Q1"]}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationTextProps2021}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Whitepaper v0.1.0</ListItem>
                  </UnorderedList>{" "}
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2021_Q3"]}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationTextProps2021}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>First Prototype</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2021_Q4"]}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationTextProps2021}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Seed Round</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  opacity={quarterOpacity}
                  colSpan={{
                    md: isUnCollapsedDisplay["2022"] ? 2 : 7,
                    lg: isUnCollapsedDisplay["2022"] ? 2 : 7,
                    xl: isUnCollapsedDisplay["2022"] ? 2 : 5,
                    "2xl": isUnCollapsedDisplay["2022"] ? 1 : 6,
                  }}
                  marginLeft={"1rem"}
                >
                  <UnorderedList
                    display={isUnCollapsedDisplay["2022"] ? "none" : "block"}
                    {...animationListProps2022}
                  >
                    <ListItem>Private testnet</ListItem>{" "}
                    <ListItem>Public testnet</ListItem>{" "}
                    <ListItem>Strategic round - 1</ListItem>
                    <ListItem>
                      EIP 5299 - Storage scaling standard
                    </ListItem>{" "}
                    <ListItem>Mainnet - Q3</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q1"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Private testnet</ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q3"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Public testnet</ListItem>{" "}
                    <ListItem>Strategic round - 1</ListItem>
                    <ListItem>
                      EIP 5299 - Storage scaling standard
                    </ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  as="motion.div"
                  layout
                  colSpan={colSpan["2022_Q4"]}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  {...infoSingleProps}
                >
                  <UnorderedList>
                    <ListItem>Mainnet - Q3</ListItem>
                  </UnorderedList>
                </GridItem>
              </Grid>
            </VStack>
            <Grid
              as="motion.div"
              layout
              width="100%"
              templateColumns="repeat(6,1fr)"
              gap="1rem"
            >
              <GridItem
                as="motion.div"
                layout
                colSpan={{ base: 2, md: 1 }}
                borderRadius="0.5rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
              >
                <Text
                  align="center"
                  color="white"
                  fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
                >
                  100 mn
                </Text>
              </GridItem>
              <GridItem
                as="motion.div"
                layout
                borderRadius="0.5rem"
                colSpan={{ base: 2, md: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
              >
                <Text
                  align="center"
                  color="white"
                  fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
                >
                  100 mn
                </Text>
              </GridItem>
              <GridItem
                as="motion.div"
                layout
                borderRadius="0.5rem"
                colSpan={{ base: 2, md: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
              >
                <Text
                  align="center"
                  color="white"
                  fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
                >
                  100 mn
                </Text>
              </GridItem>
              <GridItem
                as="motion.div"
                layout
                borderRadius="0.5rem"
                colSpan={{ base: 2, md: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
              >
                <Text
                  align="center"
                  color="white"
                  fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
                >
                  100 mn
                </Text>
              </GridItem>
              <GridItem
                as="motion.div"
                layout
                borderRadius="0.5rem"
                colSpan={{ base: 2, md: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
              >
                <Text
                  align="center"
                  color="white"
                  fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
                >
                  100 mn
                </Text>
              </GridItem>
              <GridItem
                as="motion.div"
                layout
                borderRadius="0.5rem"
                colSpan={{ base: 2, md: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
              >
                <Text
                  align="center"
                  color="white"
                  fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
                >
                  100 mn
                </Text>
              </GridItem>
            </Grid>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default MilestonesAnimated;
