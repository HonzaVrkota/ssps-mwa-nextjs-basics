const AllPosts = () => {
  return <div>Route pro všechny URL</div>;
};

export const getServerSideProps = async (ctx) => {
  console.log(ctx);

  return {
    props: {
      data: "test",
    },
  };
};

export default AllPosts;
