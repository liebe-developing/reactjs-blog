import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const SearchForm = ({ searchPost, setSearchPost }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputGroup ml={3}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          bgColor="white"
          type="search"
          placeHolder="Search Posts"
          value={searchPost}
          onChange={(e) => setSearchPost(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchForm;
