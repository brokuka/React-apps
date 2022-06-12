import React from "react";
import Button from "../../../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setCategoryId } from "../../../../store/slices/filterSlice";
import { fetchProducts } from "../../../../store/slices/productsSlice";

/* Style */
import styles from "./ShopFilters.module.scss";

const btnGroup = [
  {
    title: "Все",
    catIndex: 0,
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
  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onClickCategory = React.useCallback((id) => {
    dispatch(setCategoryId(id));
  });

  const onFetchProducts = () => {
    if (categoryId > 0) {
      dispatch(fetchProducts(`?categoryId=${categoryId}`));
    } else {
      dispatch(fetchProducts());
    }
  };

  React.useEffect(() => {
    onFetchProducts();
  }, [categoryId]);

  return (
    <div className={styles.root}>
      <div className={styles.group}>
        {btnGroup.map(({ title, catIndex }) => (
          <Button
            onClick={() => onClickCategory(catIndex)}
            type="filter"
            key={catIndex}
            active={catIndex === categoryId}
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShopFilters;
