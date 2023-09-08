import {
  HStack,
  List,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List spacing="5px">
      <Skeleton />
      <HStack>
        <SkeletonCircle size="8" />
      </HStack>
    </List>
  );
};

export default GenreListSkeleton;
