import Layout from "../components/Layout/Layout";
import NestedLayout from "../components/Layout/NestedLayout";

const ClankyPage = () => {
  return <div>clanky</div>;
};

export default ClankyPage;
ClankyPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
