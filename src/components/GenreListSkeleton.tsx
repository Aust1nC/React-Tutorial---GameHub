import { HStack, List, Skeleton, SkeletonCircle } from "@chakra-ui/react";

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
