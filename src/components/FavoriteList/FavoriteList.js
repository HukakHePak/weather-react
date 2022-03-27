import { NamedList } from "../NamedList/NamedList";
import { ClosinSelectItem } from "../ClosinSelectItem/ClosinSelectItem";

export function FavoriteList(props) {
 const { favorites, onSelect, onRemove } = props;

  return (
    <NamedList
      title="Added Locations:"
      list={[...favorites].map((city) => (
        <ClosinSelectItem
          key={city}
          value={city}
          onOpen={onSelect}
          onClose={onRemove}
        />
      ))}
    />
  );
}
