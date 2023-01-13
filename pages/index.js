// Configurations
import { API_URL } from "@/config/index";

// Import Layout
import Layout from "@/components/Layout";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  return {
    props: { events },
    revalidate: 1
  };
}
