import { Pagination, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import SpecialtiesCard from "./SpecialtiesCard";

const SpecialtiesList = () => {
  const { getSpecs, specs, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState(searchParams.get("first_name") || "");

  useEffect(() => {
    getSpecs();
  }, []);

  useEffect(() => {
    setSearchParams({
      first_name: search,
    });
  }, [search]);

  useEffect(() => {
    getSpecs();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        {specs.map((item) => (
          <SpecialtiesCard key={item.id} item={item} />
        ))}
      </Box>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={pages}
          variant="outlined"
          color="primary"
          onChange={(e, page) => setCurrentPage(page)}
          page={currentPage}
        />
      </Box>
    </div>
  );
};

export default SpecialtiesList;
