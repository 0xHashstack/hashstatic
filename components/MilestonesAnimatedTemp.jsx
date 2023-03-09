import {
  Box,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import { MilestoneLarge, MilestoneSmall } from "./Icons";

const variantsQuarterText = {
  collapsed: {
    opacity: 0,
    x: -15,
    transition: { duration: 0.15 },
  },
  uncollapsed: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 },
  },
};

const variantsYearText = {
  collapsed: {
    opacity: 1,
    transition: { delay: 0.2 },
    x: 0,
  },
  uncollapsed: {
    opacity: 0,
    x: -15,
  },
};

const UnorderedListProps = {
  lineHeight: { lg: "1.25rem", xl: "1.5rem", "2xl": "1.5rem" },
  fontSize: {
    md: "0.75rem",
    lg: "0.875rem",
    xl: "0.875rem",
    "2xl": "0.875rem",
  },
};

function MilestonesAnimatedTemp() {
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
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const onClickHandler = async (
    year,
    recursionAllowed = true,
    sideEffectCall = false
  ) => {
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

      const alreadyUncollapsedYear = [2020, 2021, 2022, 2023].filter(
        (element) => isUnCollapsed[element] && element !== year
      );
      console.log(year);
      console.log(isUnCollapsed);
      console.log(alreadyUncollapsedYear);
      if (
        alreadyUncollapsedYear?.length === 0 &&
        year !== 2023 &&
        !sideEffectCall
      ) {
        await sleep(600);
        await onClickHandler(2023, false);
      }
    } else {
      const alreadyUncollapsedYear = [2020, 2021, 2022, 2023].filter(
        (year) => isUnCollapsed[year]
      );
      // alreadyUncollapsedYears.forEach((year) => onClickHandler(year));

      if (alreadyUncollapsedYear?.length > 0 && recursionAllowed) {
        await onClickHandler(alreadyUncollapsedYear[0], true, true);
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
          spacing={{ base: "2rem", xl: "3rem" }}
        >
          <Text
            fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
            textColor="white"
            fontWeight={500}
          >
            Milestones
          </Text>
          <VStack spacing={{ md: "1rem", "2xl": "4rem" }} width="100%">
            <VStack
              minHeight={{
                md: "15rem",
                lg: "15rem",
                xl: "15rem",
                "2xl": "15rem",
              }}
              spacing="1rem"
              width="100%"
            >
              {/* first grid */}
              <motion.div layout={true} className="gridParent">
                <LayoutGroup>
                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2020)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYear"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2020]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2020] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2020] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    <motion.div layout>2020</motion.div>
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2020] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q1</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2020] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q1-Q4</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2021)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYear"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2021]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2021] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2021] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    <motion.div layout>2021</motion.div>
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2021] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q1</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2021] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q3</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2021] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q4</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2022)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYear"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2022]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2022] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2022] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    <motion.div layout>2022</motion.div>
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2022] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q1</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2022] && (
                      <motion.div
                        className="gridItemQuarterTop"
                        style={{ gridColumnStart: "span 5" }}
                      >
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q2</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2022] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q3</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2023)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYear"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2022]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2023] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2023] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    <motion.div layout>2023</motion.div>
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2023] && (
                      <motion.div className="gridItemQuarterTop">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q1</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2023] && (
                      <motion.div
                        className="gridItemQuarterTop"
                        style={{ gridColumnStart: "span 5" }}
                      >
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>Q2</motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </LayoutGroup>
              </motion.div>

              {/* second grid */}
              <Box
                borderRadius="0.5rem"
                height="0.5rem"
                // paddingX="1rem"
                width="100%"
                bgColor="#CDC0FF"
                display="flex"
                alignItems="center"
                color="white"
              >
                <motion.div layout={true} className="gridParentMiddle">
                  <LayoutGroup>
                    {/* 2020 */}

                    <Box
                      as="motion.div"
                      _hover={{
                        cursor: "pointer",
                      }}
                      onClick={() => onClickHandler(2020)}
                      layout="position"
                      transition={{ duration: 0.3 }}
                      className="gridItemYear"
                      // style={{
                      //   gridColumnStart: isUnCollapsedDisplay[2020]
                      //     ? "span 3"
                      //     : "span 6",
                      // }}
                      sx={{
                        gridColumnStart: {
                          md: isUnCollapsedDisplay[2020] ? "span 3" : "span 6",
                          lg: isUnCollapsedDisplay[2020] ? "span 2" : "span 5",
                        },
                      }}
                    >
                      <motion.div layout>
                        <MilestoneLarge color="white" />
                      </motion.div>
                    </Box>
                    <AnimatePresence>
                      {isUnCollapsed[2020] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isUnCollapsed[2020] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* 2021 */}

                    <Box
                      as="motion.div"
                      _hover={{
                        cursor: "pointer",
                      }}
                      onClick={() => onClickHandler(2021)}
                      layout="position"
                      transition={{ duration: 0.3 }}
                      className="gridItemYear"
                      // style={{
                      //   gridColumnStart: isUnCollapsedDisplay[2021]
                      //     ? "span 3"
                      //     : "span 6",
                      // }}
                      sx={{
                        gridColumnStart: {
                          md: isUnCollapsedDisplay[2021] ? "span 3" : "span 6",
                          lg: isUnCollapsedDisplay[2021] ? "span 2" : "span 5",
                        },
                      }}
                    >
                      <motion.div layout>
                        <MilestoneLarge />
                      </motion.div>
                    </Box>
                    <AnimatePresence>
                      {isUnCollapsed[2021] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isUnCollapsed[2021] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isUnCollapsed[2021] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* 2022 */}

                    <Box
                      as="motion.div"
                      _hover={{
                        cursor: "pointer",
                      }}
                      onClick={() => onClickHandler(2022)}
                      layout="position"
                      transition={{ duration: 0.3 }}
                      className="gridItemYear"
                      // style={{
                      //   gridColumnStart: isUnCollapsedDisplay[2022]
                      //     ? "span 3"
                      //     : "span 6",
                      // }}
                      sx={{
                        gridColumnStart: {
                          md: isUnCollapsedDisplay[2022] ? "span 3" : "span 6",
                          lg: isUnCollapsedDisplay[2022] ? "span 2" : "span 5",
                        },
                      }}
                      // variants={variantsYear}
                      // initial="uncollapsed"
                    >
                      <motion.div layout>
                        <MilestoneLarge />
                      </motion.div>
                    </Box>
                    <AnimatePresence>
                      {isUnCollapsed[2022] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isUnCollapsed[2022] && (
                        <motion.div
                          className="gridItemQuarter"
                          style={{ gridColumnStart: "span 5" }}
                        >
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isUnCollapsed[2022] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* 2023 */}

                    <Box
                      as="motion.div"
                      _hover={{
                        cursor: "pointer",
                      }}
                      onClick={() => onClickHandler(2023)}
                      layout="position"
                      transition={{ duration: 0.3 }}
                      className="gridItemYear"
                      // style={{
                      //   gridColumnStart: isUnCollapsedDisplay[2022]
                      //     ? "span 3"
                      //     : "span 6",
                      // }}
                      sx={{
                        gridColumnStart: {
                          md: isUnCollapsedDisplay[2023] ? "span 3" : "span 6",
                          lg: isUnCollapsedDisplay[2023] ? "span 2" : "span 5",
                        },
                      }}
                      // variants={variantsYear}
                      // initial="uncollapsed"
                    >
                      <motion.div layout>
                        <MilestoneLarge />
                      </motion.div>
                    </Box>
                    <AnimatePresence>
                      {isUnCollapsed[2023] && (
                        <motion.div className="gridItemQuarter">
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isUnCollapsed[2023] && (
                        <motion.div
                          className="gridItemQuarter"
                          style={{ gridColumnStart: "span 5" }}
                        >
                          <motion.span
                            initial="collapsed"
                            animate="uncollapsed"
                            exit="collapsed"
                            variants={variantsQuarterText}
                          >
                            <motion.div layout>
                              <Box
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                              >
                                <MilestoneSmall fontSize={"0.5rem"} />
                              </Box>
                            </motion.div>
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </LayoutGroup>
                </motion.div>
              </Box>

              {/* third grid */}
              <motion.div className="gridParent">
                <LayoutGroup>
                  {/* 2020 */}

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2020)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYearBottom"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2020]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2020] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2020] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    <motion.div
                      initial="uncollapsed"
                      animate="collapsed"
                      exit="uncollapsed"
                      variants={variantsYearText}
                      layout
                    >
                      {!isUnCollapsedDisplay[2020] && (
                        <motion.div
                          layout
                          initial="uncollapsed"
                          animate="collapsed"
                          exit="uncollapsed"
                          variants={variantsYearText}
                        >
                          <UnorderedList
                            width={{ md: "60%", lg: "80%", xl: "auto" }}
                            {...UnorderedListProps}
                          >
                            <ListItem>Problem Discovery</ListItem>{" "}
                            <ListItem>Research Phase</ListItem>{" "}
                          </UnorderedList>
                        </motion.div>
                      )}
                    </motion.div>
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2020] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>Problem Discovery</ListItem>
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2020] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>Research Phase</ListItem>
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 2021 */}

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2021)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYearBottom"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2021]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2021] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2021] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    <motion.div
                      initial="uncollapsed"
                      animate="collapsed"
                      exit="uncollapsed"
                      variants={variantsYearText}
                      layout
                    >
                      {!isUnCollapsedDisplay[2021] && (
                        <motion.div
                          initial="uncollapsed"
                          animate="collapsed"
                          exit="uncollapsed"
                          variants={variantsYearText}
                          layout
                        >
                          <UnorderedList
                            width={{ md: "70%", lg: "80%", xl: "auto" }}
                            {...UnorderedListProps}
                          >
                            <ListItem>Whitepaper v0.1.0</ListItem>{" "}
                            <ListItem>First Prototype</ListItem>{" "}
                            <ListItem>Seed Round</ListItem>{" "}
                          </UnorderedList>
                        </motion.div>
                      )}
                    </motion.div>
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2021] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>Whitepaper v0.1.0</ListItem>
                            </UnorderedList>{" "}
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2021] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>First Prototype</ListItem>
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2021] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem width={{ md: "70%", lg: "auto" }}>
                                Seed Round
                              </ListItem>
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 2022 */}

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2022)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYearBottom"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2022]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2022] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2022] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    {!isUnCollapsedDisplay[2022] && (
                      <motion.div
                        initial="uncollapsed"
                        animate="collapsed"
                        exit="uncollapsed"
                        variants={variantsYearText}
                        layout
                      >
                        <UnorderedList
                          display={
                            isUnCollapsedDisplay[2022] ? "none" : "block"
                          }
                          {...UnorderedListProps}
                        >
                          <ListItem>Private testnet</ListItem>{" "}
                          <ListItem>Public testnet</ListItem>{" "}
                          <ListItem>
                            EIP 5299 - Storage scaling standard
                          </ListItem>{" "}
                          <ListItem>Starknet testnet</ListItem>
                        </UnorderedList>
                      </motion.div>
                    )}
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2022] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>Private testnet</ListItem>{" "}
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2022] && (
                      <motion.div
                        className="gridItemQuarterBottom"
                        style={{ gridColumnStart: "span 5" }}
                      >
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps} width="80%">
                              <ListItem>Public testnet</ListItem>{" "}
                              <ListItem>
                                EIP 5299 - Storage scaling standard
                              </ListItem>{" "}
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2022] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>Starknet testnet</ListItem>
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 2023 */}

                  <Box
                    as="motion.div"
                    onClick={() => onClickHandler(2023)}
                    layout="position"
                    transition={{ duration: 0.3 }}
                    className="gridItemYearBottom"
                    // style={{
                    //   gridColumnStart: isUnCollapsedDisplay[2022]
                    //     ? "span 3"
                    //     : "span 6",
                    // }}
                    sx={{
                      gridColumnStart: {
                        md: isUnCollapsedDisplay[2023] ? "span 3" : "span 6",
                        lg: isUnCollapsedDisplay[2023] ? "span 2" : "span 5",
                      },
                    }}
                  >
                    {!isUnCollapsedDisplay[2023] && (
                      <motion.div
                        initial="uncollapsed"
                        animate="collapsed"
                        exit="uncollapsed"
                        variants={variantsYearText}
                        layout
                      >
                        <UnorderedList
                          display={
                            isUnCollapsedDisplay[2023] ? "none" : "block"
                          }
                          {...UnorderedListProps}
                        >
                          <ListItem>Hashstack Mainnet alpha</ListItem>{" "}
                          <ListItem>Hashstack Mainnet beta</ListItem>{" "}
                        </UnorderedList>
                      </motion.div>
                    )}
                  </Box>
                  <AnimatePresence>
                    {isUnCollapsed[2023] && (
                      <motion.div className="gridItemQuarterBottom">
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps}>
                              <ListItem>Hashstack Mainnet alpha</ListItem>{" "}
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {isUnCollapsed[2023] && (
                      <motion.div
                        className="gridItemQuarterBottom"
                        style={{ gridColumnStart: "span 5" }}
                      >
                        <motion.span
                          initial="collapsed"
                          animate="uncollapsed"
                          exit="collapsed"
                          variants={variantsQuarterText}
                        >
                          <motion.div layout>
                            <UnorderedList {...UnorderedListProps} width="80%">
                              <ListItem>Hashstack Mainnet beta</ListItem>{" "}
                            </UnorderedList>
                          </motion.div>
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </LayoutGroup>
              </motion.div>
            </VStack>
            <Grid width="100%" templateColumns="repeat(4,1fr)" gap="2rem">
              {/* <GridItem
                colSpan={{ base: 2, md: 1 }}
                borderRadius="0.5rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                padding={{ base: "1rem", xl: "1rem", "2xl": "1.5rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "0.8rem",
                    lg: "1.1rem",
                    "2xl": "1.5rem",
                  }}
                  opacity="60%"
                  lineHeight={{
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                    "2xl": "4rem",
                  }}
                  as="span"
                >
                  BNB TVL
                </Text>{" "}
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "1rem",
                    lg: "1.3rem",
                    xl: "1.5rem",
                    "2xl": "2rem",
                  }}
                  lineHeight={{ lg: "2rem", xl: "1.5rem", "2xl": "2.5rem" }}
                  fontWeight="600"
                >
                  $392 <br />
                  Million +
                </Text>
              </GridItem> */}
              <GridItem
                colSpan={{ base: 2, md: 1 }}
                borderRadius="0.5rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                padding={{ base: "1rem", xl: "1rem", "2xl": "1.5rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "0.8rem",
                    lg: "1.1rem",
                    "2xl": "1.5rem",
                  }}
                  opacity="60%"
                  lineHeight={{
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                    "2xl": "4rem",
                  }}
                  as="span"
                >
                  Twitter
                </Text>{" "}
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "1rem",
                    lg: "1.3rem",
                    xl: "1.5rem",
                    "2xl": "2rem",
                  }}
                  lineHeight={{ lg: "2rem", xl: "1.5rem", "2xl": "2.5rem" }}
                  fontWeight="600"
                >
                  28.6K+ <br />
                  Followers
                </Text>
              </GridItem>

              <GridItem
                colSpan={{ base: 2, md: 1 }}
                borderRadius="0.5rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                padding={{ base: "1rem", xl: "1rem", "2xl": "1.5rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "0.8rem",
                    lg: "1.1rem",
                    "2xl": "1.5rem",
                  }}
                  opacity="60%"
                  lineHeight={{
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                    "2xl": "4rem",
                  }}
                  as="span"
                >
                  Discord
                </Text>{" "}
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "1rem",
                    lg: "1.3rem",
                    xl: "1.5rem",
                    "2xl": "2rem",
                  }}
                  lineHeight={{ lg: "2rem", xl: "1.5rem", "2xl": "2.5rem" }}
                  fontWeight="600"
                >
                  17.4K+ <br />
                  Members
                </Text>
              </GridItem>

              <GridItem
                borderRadius="0.5rem"
                colSpan={{ base: 2, md: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                padding={{ base: "1rem", xl: "1rem", "2xl": "1.5rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "0.8rem",
                    lg: "1.1rem",
                    "2xl": "1.5rem",
                  }}
                  opacity="60%"
                  lineHeight={{
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                    "2xl": "4rem",
                  }}
                  as="span"
                >
                  Starknet TVL
                </Text>{" "}
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "1rem",
                    lg: "1.3rem",
                    xl: "1.5rem",
                    "2xl": "2rem",
                  }}
                  lineHeight={{ lg: "2rem", xl: "1.5rem", "2xl": "2.5rem" }}
                  fontWeight="600"
                >
                  $72+ <br />
                  Million
                </Text>
              </GridItem>

              <GridItem
                colSpan={{ base: 2, md: 1 }}
                borderRadius="0.5rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                padding={{ base: "1rem", xl: "1rem", "2xl": "1.5rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "0.8rem",
                    lg: "1.1rem",
                    "2xl": "1.5rem",
                  }}
                  opacity="60%"
                  lineHeight={{
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                    "2xl": "4rem",
                  }}
                  as="span"
                >
                  Transactions
                </Text>{" "}
                <Text
                  fontSize={{
                    base: "1.3rem",
                    md: "1rem",
                    lg: "1.3rem",
                    xl: "1.5rem",
                    "2xl": "2rem",
                  }}
                  lineHeight={{ lg: "2rem", xl: "1.5rem", "2xl": "2.5rem" }}
                  fontWeight="600"
                >
                  87,500+ <br />
                  Completed
                </Text>
              </GridItem>
            </Grid>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default MilestonesAnimatedTemp;
