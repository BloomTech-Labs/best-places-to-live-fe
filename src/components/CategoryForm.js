import React from "react";

const CategoryForm = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginTop="10px"
      >
        {factors.map(factor => {
          return (
            <>
              <CheckOval factor={factor} register={register} />
            </>
          );
        })}
      </Container>
      <Flex justifyContent="center">
        <Button type="submit">Explore</Button>
      </Flex>
    </form>
  );
};

export default CategoryForm;
