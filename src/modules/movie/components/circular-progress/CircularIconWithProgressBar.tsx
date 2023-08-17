import { Box, Card, Flex, Text, CircularProgress } from '@chakra-ui/react'

interface ICircularIconWithProgressBarProps {
  progress: number
}

export const CircularIconWithProgressBar = ({
  progress,
}: ICircularIconWithProgressBarProps) => {
  return (
    <Box position="relative" display="inline-block">
      <CircularProgress
        value={progress}
        size="72px"
        thickness="10px"
        color="base.yellow500"
        trackColor="base.gray100"
      />
      <Box
        position="absolute"
        top="47%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontWeight="bold"
        fontSize={20}
      >
        {progress}%
      </Box>
    </Box>
  )
}
