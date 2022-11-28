import {
  Box,
  Grid,
  GridItem,
  HStack,
  keyframes,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MilestoneLarge, MilestoneSmall } from "./Icons";

const templateRows = "repeat(16,1fr)";
const quarterOpacity = "40%";

function MilestonesAnimatedMobile() {
  const [isUnCollapsed, setIsUnCollapsed] = useState({
    2020: false,
    2021: false,
    2022: true,
  });

  const [isUnCollapsedDisplay, setIsUnCollapsedDisplay] = useState({
    2020: false,
    2021: false,
    2022: true,
  });

  const sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const onClickHandler = async (year, recursionAllowed = true) => {
    if (isUnCollapsed[year]) {
      setIsUnCollapsed((oldValue) => {
        const newValue = { ...oldValue };
        newValue[year] = false;
        return newValue;
      });
      setTimeout(() => {
        setIsUnCollapsedDisplay((oldValue) => {
          const newValue = { ...oldValue };
          ("1rem");
          newValue[year] = false;
          return newValue;
        });
      }, 500);
      const alreadyUncollapsedYear = [2020, 2021, 2022].filter(
        (element) => isUnCollapsed[element] && element !== year
      );
      if (alreadyUncollapsedYear?.length === 0 && year !== 2022) {
        await sleep(600);
        await onClickHandler(2022, false);
      }
    } else {
      const alreadyUncollapsedYear = ["2020", "2021", "2022"].filter(
        (year) => isUnCollapsed[year]
      );
      if (alreadyUncollapsedYear?.length > 0 && recursionAllowed) {
        await onClickHandler(alreadyUncollapsedYear[0]);
        await sleep(800);
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
    0% { opacity:0%; transform:translateY(-15px)}
    100% {  opacity:40%; transform:translateY(+0px)}
  `;

  const fadeInQuarterInfo = keyframes`
    0% { opacity:0%; transform:translateY(-15px)}
    100% {  opacity:100%; transform:translateY(+0px)}
  `;

  const fadeOutQuarterText = keyframes`
    0% { opacity:40%;display:block}
    100% {  opacity:0%; transform:translateY(-10px) }
  `;

  const fadeOutQuarterInfo = keyframes`
    0% { opacity:100%;display:block}
    100% {  opacity:0%; transform:translateY(-10px); display:none}
  `;

  const animationTextProps2020 = {
    animation: `${
      isUnCollapsed["2020"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.5s`,
  };

  const animationTextProps2021 = {
    animation: `${
      isUnCollapsed["2021"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.5s`,
  };

  const animationTextProps2022 = {
    animation: `${
      isUnCollapsed["2022"] ? fadeInQuarterText : fadeOutQuarterText
    } 0.5s`,
  };

  const animationInfoProps2020 = {
    animation: `${
      isUnCollapsed["2020"] ? fadeInQuarterInfo : fadeOutQuarterInfo
    } 0.5s`,
  };

  const animationInfoProps2021 = {
    animation: `${
      isUnCollapsed["2021"] ? fadeInQuarterInfo : fadeOutQuarterInfo
    } 0.5s`,
  };

  const animationInfoProps2022 = {
    animation: `${
      isUnCollapsed["2022"] ? fadeInQuarterInfo : fadeOutQuarterInfo
    } 0.5s`,
  };

  return (
    <Box
      paddingTop={{ base: "8rem", md: "3rem", xl: "5rem" }}
      paddingBottom={{ base: "4rem", md: "3rem", xl: "5rem" }}
      display={{ base: "flex", md: "none" }}
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
        paddingX={{ base: "1rem" }}
        paddingY={{ base: "1rem" }}
      >
        <VStack
          borderRadius="0.5rem"
          paddingY={{ base: "2rem" }}
          paddingX={{ base: "1rem" }}
          width="100%"
          bgColor="featured_by-background"
          spacing={{ base: "2rem" }}
        >
          <Text
            fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
            textColor="white"
            fontWeight={500}
          >
            Milestones
          </Text>
          <VStack width="100%" spacing="3rem">
            {/* <motion.div layout> */}
            <HStack alignItems="stretch" width="100%">
              <Grid // the real thing starts
                templateRows={templateRows}
                width="35%"
                color="white"
                // paddingX="1rem"
                marginX="0.5rem"
                textAlign="right"
                lineHeight="1rem"
              >
                <GridItem
                  onClick={async () => {
                    await onClickHandler(2020);
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  rowSpan={isUnCollapsedDisplay["2020"] ? 1 : 3}
                  fontWeight={600}
                  display="flex"
                  justifyContent={"right"}
                  alignItems="flex-start"
                  marginTop="1rem"
                >
                  2020
                </GridItem>
                <GridItem
                  rowSpan={2}
                  {...animationTextProps2020}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  marginTop="1rem"
                  lineHeight="1rem"
                >
                  Q1
                </GridItem>
                <GridItem
                  rowSpan={2}
                  {...animationTextProps2020}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  marginTop="1rem"
                >
                  Q1-Q4
                </GridItem>
                <GridItem
                  onClick={async () => {
                    await onClickHandler(2021);
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  rowSpan={isUnCollapsedDisplay["2021"] ? 1 : 3}
                  fontWeight={600}
                  marginTop="1rem"
                >
                  2021
                </GridItem>
                <GridItem
                  rowSpan={2}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationTextProps2021}
                  marginTop="1rem"
                >
                  Q1
                </GridItem>
                <GridItem
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  {...animationTextProps2021}
                  marginTop="1rem"
                >
                  Q3
                </GridItem>
                <GridItem
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  {...animationTextProps2021}
                  marginTop="1rem"
                >
                  Q4
                </GridItem>
                <GridItem
                  onClick={async () => {
                    await onClickHandler(2022);
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  rowSpan={isUnCollapsedDisplay["2022"] ? 1 : 5}
                  fontWeight={600}
                  marginTop="1rem"
                >
                  2022
                </GridItem>
                <GridItem
                  rowSpan={2}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationTextProps2022}
                  marginTop="1rem"
                >
                  Q1
                </GridItem>
                <GridItem
                  rowSpan={4}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  {...animationTextProps2022}
                  marginTop="1rem"
                >
                  Q2
                </GridItem>
                <GridItem
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  opacity={quarterOpacity}
                  fontWeight={500}
                  {...animationTextProps2022}
                  marginTop="1rem"
                >
                  Q3
                </GridItem>
              </Grid>
              <Box
                borderRadius="1rem"
                // paddingY="1rem"
                width="0.5rem"
                bgColor="#CDC0FF"
                display="flex"
                alignItems="center"
              >
                <Grid
                  templateRows={templateRows}
                  width="100%"
                  height="100%"
                  color="white"
                >
                  <GridItem
                    onClick={async () => {
                      await onClickHandler(2020);
                    }}
                    _hover={{
                      cursor: "pointer",
                    }}
                    rowSpan={isUnCollapsedDisplay["2020"] ? 1 : 3}
                    display="flex"
                    justifyContent="center"
                    alignItems="start"
                    position="relative"
                    marginTop="1rem"
                  >
                    <MilestoneLarge marginLeft="-4px" />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    {...animationInfoProps2020}
                    display={isUnCollapsedDisplay["2020"] ? "flex" : "none"}
                    marginTop="1rem"
                    // display="flex"
                    justifyContent="start"
                    alignItems="start"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    {...animationInfoProps2020}
                    display={isUnCollapsedDisplay["2020"] ? "flex" : "none"}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    onClick={async () => {
                      await onClickHandler(2021);
                    }}
                    _hover={{
                      cursor: "pointer",
                    }}
                    rowSpan={isUnCollapsedDisplay["2021"] ? 1 : 3}
                    marginTop="1rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="start"
                    position="relative"
                  >
                    <MilestoneLarge marginLeft="-4px" />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    display={isUnCollapsedDisplay["2021"] ? "flex" : "none"}
                    {...animationInfoProps2021}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    display={isUnCollapsedDisplay["2021"] ? "flex" : "none"}
                    {...animationInfoProps2021}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    display={isUnCollapsedDisplay["2021"] ? "flex" : "none"}
                    {...animationInfoProps2021}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    rowSpan={isUnCollapsedDisplay["2022"] ? 1 : 5}
                    marginTop="1rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="start"
                    position="relative"
                  >
                    <MilestoneLarge marginLeft="-4px" />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    display={isUnCollapsedDisplay["2022"] ? "flex" : "none"}
                    {...animationInfoProps2022}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    rowSpan={4}
                    display={isUnCollapsedDisplay["2022"] ? "flex" : "none"}
                    {...animationInfoProps2022}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  <GridItem
                    rowSpan={2}
                    display={isUnCollapsedDisplay["2022"] ? "flex" : "none"}
                    {...animationInfoProps2022}
                    justifyContent="start"
                    alignItems="start"
                    marginTop="1rem"
                  >
                    <MilestoneSmall marginY="0.2rem" fontSize={"0.5rem"} />
                  </GridItem>
                  {/* <GridItem
                    rowSpan={1}
                    marginTop="1rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <MilestoneLarge marginLeft="-4px" />
                  </GridItem> */}
                  {/* <GridItem
                    rowSpan={1}
                    marginTop="1rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <MilestoneLarge marginLeft="-4px" />
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    marginTop="1rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    marginBottom="0.5rem"
                  >
                    <MilestoneLarge marginLeft="-4px" />
                  </GridItem> */}
                </Grid>
              </Box>
              <Grid
                templateRows={templateRows}
                width="55%"
                color="white"
                paddingLeft="0.5rem"
                fontSize="0.9rem"
                opacity={quarterOpacity}
                fontWeight={600}
                lineHeight="1rem"
              >
                <GridItem
                  rowSpan={isUnCollapsedDisplay["2020"] ? 1 : 3}
                  marginTop="1rem"
                >
                  <UnorderedList
                    display={isUnCollapsedDisplay["2020"] ? "none" : "block"}
                    lineHeight="1rem"
                  >
                    <ListItem>Problem Discovery</ListItem>{" "}
                    <ListItem marginTop="0.75rem">Research Phase</ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                  {...animationInfoProps2020}
                >
                  <UnorderedList>
                    <ListItem>Problem Discovery</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  {...animationInfoProps2020}
                  display={isUnCollapsedDisplay["2020"] ? "block" : "none"}
                >
                  <UnorderedList>
                    <ListItem>Research Phase</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  rowSpan={isUnCollapsedDisplay["2021"] ? 1 : 3}
                  marginTop="1rem"
                >
                  <UnorderedList
                    display={isUnCollapsedDisplay["2021"] ? "none" : "block"}
                    lineHeight="1rem"
                  >
                    <ListItem>Whitepaper v0.1.0</ListItem>{" "}
                    <ListItem marginTop="0.75rem">First Prototype</ListItem>{" "}
                    <ListItem marginTop="0.75rem">Seed Round</ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationInfoProps2021}
                >
                  <UnorderedList>
                    <ListItem>Whitepaper v0.1.0</ListItem>
                  </UnorderedList>{" "}
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationInfoProps2021}
                >
                  <UnorderedList>
                    <ListItem>First Prototype</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2021"] ? "block" : "none"}
                  {...animationInfoProps2021}
                >
                  <UnorderedList>
                    <ListItem>Seed Round</ListItem>
                  </UnorderedList>
                </GridItem>

                <GridItem
                  rowSpan={isUnCollapsedDisplay["2022"] ? 1 : 5}
                  marginTop="1rem"
                >
                  <UnorderedList
                    display={isUnCollapsedDisplay["2022"] ? "none" : "block"}
                    lineHeight="1rem"
                  >
                    <ListItem>First prototype</ListItem>{" "}
                    <ListItem marginTop="0.75rem">Public testnet</ListItem>{" "}
                    <ListItem marginTop="0.75rem">
                      EIP 5299 - Storage scaling standard
                    </ListItem>{" "}
                    <ListItem marginTop="0.75rem">StarkNet testnet</ListItem>
                  </UnorderedList>
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationInfoProps2022}
                >
                  <UnorderedList>
                    <ListItem>Public testnet</ListItem>
                  </UnorderedList>{" "}
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={4}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationInfoProps2022}
                >
                  <UnorderedList>
                    <ListItem>First prototype</ListItem>{" "}
                    <ListItem marginTop="0.75rem">
                      EIP 5299 - Storage scaling standard
                    </ListItem>{" "}
                  </UnorderedList>
                </GridItem>
                <GridItem
                  marginTop="1rem"
                  rowSpan={2}
                  display={isUnCollapsedDisplay["2022"] ? "block" : "none"}
                  {...animationInfoProps2022}
                >
                  <UnorderedList>
                    <ListItem>StarkNet testnet</ListItem>
                    <ListItem></ListItem>
                  </UnorderedList>
                </GridItem>
              </Grid>
            </HStack>

            <Grid width="100%" templateColumns="repeat(4,1fr)" gap="1rem">
              <GridItem
                colSpan={{ base: 2 }}
                borderRadius="0.5rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  opacity="60%"
                  fontSize={{ base: "0.9rem" }}
                  lineHeight={{ base: "2rem" }}
                  as="span"
                >
                  BNB TVL
                </Text>{" "}
                <Text fontSize={{ base: "1rem" }} fontWeight="600">
                  $392 <br />
                  Million+
                </Text>
              </GridItem>
              <GridItem
                borderRadius="0.5rem"
                colSpan={{ base: 2 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  opacity="60%"
                  fontSize={{ base: "0.9rem" }}
                  lineHeight={{ base: "2rem" }}
                  as="span"
                >
                  Starknet TVL
                </Text>{" "}
                <Text fontSize={{ base: "1rem" }} fontWeight="600">
                  $2.4 <br />
                  Million+
                </Text>
              </GridItem>
              <GridItem
                borderRadius="0.5rem"
                colSpan={{ base: 2 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  opacity="60%"
                  fontSize={{ base: "0.9rem" }}
                  lineHeight={{ base: "2rem" }}
                  as="span"
                >
                  Twitter
                </Text>{" "}
                <Text fontSize={{ base: "1rem" }} fontWeight="600">
                  22K+ <br />
                  Followers
                </Text>
              </GridItem>
              <GridItem
                borderRadius="0.5rem"
                colSpan={{ base: 2 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={{ base: "1rem", "2xl": "2rem" }}
                bgColor="backed_by-black"
                align="center"
                color="white"
              >
                <Text
                  opacity="60%"
                  fontSize={{ base: "0.9rem" }}
                  lineHeight={{ base: "2rem" }}
                  as="span"
                >
                  Discord
                </Text>{" "}
                <Text fontSize={{ base: "1rem" }} fontWeight="600">
                  12.5K+ <br />
                  Members
                </Text>
              </GridItem>
              <GridItem
                colSpan={{ base: 4 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                align="center"
                color="white"
              >
                <Box
                  padding={{ base: "1rem", "2xl": "2rem" }}
                  borderRadius="0.5rem"
                  bgColor="backed_by-black"
                  width="50%"
                >
                  <Text
                    opacity="60%"
                    fontSize={{ base: "0.9rem" }}
                    lineHeight={{ base: "2rem" }}
                    as="span"
                  >
                    Transactions
                  </Text>{" "}
                  <Text fontSize={{ base: "1rem" }} fontWeight="600">
                    45,000+ <br />
                    Completed
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default MilestonesAnimatedMobile;
