import React from "react";
import Button from "../../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  setCategoryId,
  setFilteredItems,
} from "../../../store/slices/filterSlice";
import { useWhyDidYouUpdate } from "ahooks";

/* Style */
import styles from "./ShopFilters.module.scss";
import axios from "axios";

const btnGroup = [
  {
    title: "Все",
    catIndex: null,
  },
  {
    title: "Пальто",
    catIndex: 1,
  },
  {
    title: "Свитшоты",
    catIndex: 2,
  },
  {
    title: "Кардиганы",
    catIndex: 3,
  },
  {
    title: "Толстовки",
    catIndex: 4,
  },
];

const ShopFilters = () => {
  const products = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useWhyDidYouUpdate("ShopFilters", {});

  const onSetFilteredItems = React.useCallback(() => {
    if (filter.categoryId) {
      const filtered = products.items.filter(
        (item) => item.categoryId === filter.categoryId
      );

      dispatch(setFilteredItems(filtered));
    } else {
      dispatch(setFilteredItems(products.items));
    }
  }, [filter.categoryId, dispatch, products.items]);

  React.useEffect(() => {
    onSetFilteredItems();
  }, [onSetFilteredItems]);

  console.log(filter.categoryId);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.group}>
        {btnGroup.map(({ title, catIndex }) => (
          <Button
            onClick={() => onClickCategory(catIndex)}
            type="filter"
            key={catIndex}
            active={catIndex === filter.categoryId}
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShopFilters;
