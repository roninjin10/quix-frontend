// @ts-nocheck
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { siteConfig } from "../../../shared/config";
import { State } from "../../../store";
import {
  AvailabilityFilter,
  ChainFilter,
  CollectionFilter,
  CurrencyFilter,
  PriceFilter,
  TokenSortFilter,
} from "../../Common/Filters/Filters";
import {
  FiltersButton,
  FiltersGrid,
  FiltersSection,
  SaveFiltersButton,
} from "../../Common/Filters/styles";

export const TokenFilters = ({
  filters,
  setFilters,
  filtersUI,
  setFiltersUI,
  collectionFilters,
  setCollectionFilters,
}) => {
  const banner = useSelector((state: State) => state.banner);

  return (
    <>
      <FiltersButton
        onClick={() => setFiltersUI({ ...filtersUI, filtersVisible: true })}
      >
        Filters
      </FiltersButton>
      <FiltersSection
        className={
          filtersUI.filtersVisible
            ? banner
              ? "visible bannerVisible"
              : "visible"
            : banner
            ? "bannerVisible"
            : null
        }
      >
        <FiltersGrid>
          <TokenSortFilter
            filters={filters}
            setFilters={setFilters}
            filtersUI={filtersUI}
            setFiltersUI={setFiltersUI}
            profile={true}
          />

          <AvailabilityFilter
            filters={filters}
            setFilters={setFilters}
            filtersUI={filtersUI}
            setFiltersUI={setFiltersUI}
          />

          <ChainFilter
            filters={filters}
            setFilters={setFilters}
            filtersUI={filtersUI}
            setFiltersUI={setFiltersUI}
          />

          <PriceFilter
            filters={filters}
            setFilters={setFilters}
            filtersUI={filtersUI}
            setFiltersUI={setFiltersUI}
          />

          <CurrencyFilter
            filters={filters}
            setFilters={setFilters}
            filtersUI={filtersUI}
            setFiltersUI={setFiltersUI}
          />

          {collectionFilters.collectionResults.length > 0 && (
            <CollectionFilter
              filters={filters}
              setFilters={setFilters}
              filtersUI={filtersUI}
              setFiltersUI={setFiltersUI}
              collectionFilters={collectionFilters}
              setCollectionFilters={setCollectionFilters}
            />
          )}
        </FiltersGrid>

        <SaveFiltersButton
          onClick={() => setFiltersUI({ ...filtersUI, filtersVisible: false })}
        >
          Save
        </SaveFiltersButton>
      </FiltersSection>
    </>
  );
};
