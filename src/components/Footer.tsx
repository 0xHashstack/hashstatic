import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import DicordLogo from '../assets/Icons/dicordLogo'
import InfoIcon from '../assets/Icons/infoIcon'
import TwitterIcon from '../assets/Icons/twitterIcon'
import GithubIcon from '../assets/Icons/githubIcon'
import FileIcon from '../assets/Icons/fileIcon'
import QueryIcon from '../assets/Icons/queryIcon'

const Footer = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" pt="0" pl="2rem" pr="2rem" pb="1rem">
      <Box display="flex" flexDirection="row" gap="2.5rem">
        <Text color="#4D59E8" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" cursor="pointer">HomePage</Text>
        <Text color="#fff" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" cursor="pointer">Use Cases</Text>
        <Text color="#fff" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" cursor="pointer">Documentation</Text>
        <Text color="#fff" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" cursor="pointer">Tokenomics</Text>
        <Text color="#fff" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" cursor="pointer">Contribute-2-Earn</Text>
        <Text color="#fff" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" cursor="pointer">White Paper</Text>
      </Box>
      <Box display="flex" flexDirection="row" gap="2.5rem">
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer">
            <InfoIcon/>
        </Box>
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer">
            <TwitterIcon/>
        </Box>
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer">
            <DicordLogo/>
        </Box>
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer">
            <GithubIcon/>
        </Box>
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer">
            <FileIcon/>
        </Box>
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer">
            <QueryIcon/>
        </Box>
      </Box>

      
    </Box>
  )
}

export default Footer