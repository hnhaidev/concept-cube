import React from 'react';

export default function Item(props: any) {
  const { item } = props;
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <ul>
        {item.listItem.map((item: any, index: number) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
