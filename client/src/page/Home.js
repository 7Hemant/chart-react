import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "../Components/LineChart";
import RadarChart from "../Components/RadarChart";
import ScatterChart from "../Components/ScatterChart";
import DoughnutChart from "../Components/DoughnutChart";
import BubbleChart from "../Components/BubbleChart";
import BarChart from "../Components/BarChart";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [yearend, setYearEnd] = useState([]);
  const [topic, setTopic] = useState([]);
  const [sector, setSector] = useState([]);
  const [region, setRegion] = useState([]);
  const [pestle, setPestle] = useState([]);
  const [source, setSource] = useState([]);
  const [country, setCountry] = useState([]);
  const [isloading, setLoading] = useState(false);
  const apiCall = async () => {
    await axios.get("http://localhost:5000/").then((res) => {
      setPosts(res?.data?.post);
      setLoading(true);
    });
  };
  useEffect(() => {
    apiCall();
  }, []);
  const endYear = posts
    ?.filter((post) => post?.end_year != null)
    .sort((a, b) => a?.end_year - b?.end_year);
  const Topic = posts
    ?.filter((post) => post?.topic != "")
    .sort((a, b) => a?.relevance - b?.relevance);
  const Sector = posts
    ?.filter((post) => post?.sector != "")
    .sort((a, b) => a?.relevance - b?.relevance);
  const Region = posts
    ?.filter((post) => post?.region != "")
    .sort((a, b) => a?.relevance - b?.relevance);
  console.log(Region);
  const Pestle = posts
    ?.filter((post) => post?.pestle != "")
    .sort((a, b) => a?.relevance - b?.relevance);
  const Source = posts
    ?.filter((post) => post?.source != "")
    .sort((a, b) => a?.relevance - b?.relevance);
  const Country = posts
    ?.filter((post) => post?.country != "")
    .sort((a, b) => a?.relevance - b?.relevance);

  useEffect(() => {
    setYearEnd({
      labels: endYear.map((data) => data?.end_year),
      datasets: [
        {
          label: endYear.map((data) => data?.title),
          data: endYear.map((data) => data?.relevance),
        },
      ],
    });
    setTopic({
      labels: Topic.map((data) => data?.topic),
      datasets: [
        {
          label: Topic.map((data) => data?.title),
          data: Topic.map((data) => data?.relevance),
        },
      ],
    });
    setSector({
      labels: Sector.map((data) => data?.sector),
      datasets: [
        {
          label: Sector.map((data) => data?.title),
          data: Sector.map((data) => data?.relevance),
        },
      ],
    });

    setRegion({
      labels: Region.map((data) => data?.region),
      datasets: [
        {
          label: Region.map((data) => data?.title),
          data: Region.map((data) => data?.relevance),
        },
      ],
    });
    setPestle({
      labels: Pestle.map((data) => data?.pestle),
      datasets: [
        {
          label: Pestle.map((data) => data?.title),
          data: Pestle.map((data) => data?.relevance),
        },
      ],
    });
    setSource({
      labels: Source.map((data) => data?.source),
      datasets: [
        {
          label: Source.map((data) => data?.title),
          data: Source.map((data) => data?.relevance),
        },
      ],
    });
    setCountry({
      labels: Country.map((data) => data?.country),
      datasets: [
        {
          label: Country.map((data) => data?.title),
          data: Country.map((data) => data?.relevance),
        },
      ],
    });
  }, [posts]);
  return (
    <div>
      {isloading && <LineChart chartdata={yearend} />}
      {isloading && <RadarChart chartdata={yearend} />}
      {isloading && <ScatterChart chartdata={yearend} />}
      {isloading && <DoughnutChart chartdata={yearend} />}
      {isloading && <BubbleChart chartdata={yearend} />}
      {isloading && <BarChart chartdata={yearend} />}

      <h1>second chart</h1>
      {isloading && <LineChart chartdata={topic} />}
      {isloading && <RadarChart chartdata={topic} />}
      {isloading && <DoughnutChart chartdata={topic} />}
      {isloading && <BarChart chartdata={topic} />}
      <h1>three Chart</h1>
      {isloading && <LineChart chartdata={sector} />}
      {isloading && <RadarChart chartdata={sector} />}
      {isloading && <DoughnutChart chartdata={sector} />}
      {isloading && <BarChart chartdata={sector} />}
      <h1>four chart</h1>
      {isloading && <LineChart chartdata={region} />}
      {isloading && <RadarChart chartdata={region} />}
      {isloading && <DoughnutChart chartdata={region} />}
      {isloading && <BarChart chartdata={region} />}
      <h1>five Chart</h1>
      {isloading && <LineChart chartdata={pestle} />}
      {isloading && <RadarChart chartdata={pestle} />}
      {isloading && <DoughnutChart chartdata={pestle} />}
      {isloading && <BarChart chartdata={pestle} />}
      <h1>six chart</h1>
      {isloading && <LineChart chartdata={source} />}
      {isloading && <RadarChart chartdata={source} />}
      {isloading && <DoughnutChart chartdata={source} />}
      {isloading && <BarChart chartdata={source} />}
      <h1>seven chart</h1>
      {isloading && <LineChart chartdata={country} />}
      {isloading && <RadarChart chartdata={country} />}
      {isloading && <DoughnutChart chartdata={country} />}
      {isloading && <BarChart chartdata={country} />}
    </div>
  );
};

export default Home;
