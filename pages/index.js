import Link from "next/link";
import Layout from "../components/Layout/Layout";

const Index = () => {
  return (
    <div>
      homepage
      <div>
        <Link href={"/clanky"}>Články</Link>
      </div>
    </div>
  );
};

export default Index;

// Index.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
