import React from 'react';

export const List = () => {
    let obj = [
        {
            name: "mango",
            id: 1,
            type: "fruit"
        },
        {
            name: "potato",
            id: 2,
            type: "vegetable"
        },
        {
            name: "Banana",
            id: 3,
            type: "fruit"
        },
        {
            name: "orange",
            id: 4,
            type: "fruit"
        },
        {
            name: "carrot",
            id: 5,
            type: "vegatable"
        },
        {
            name: "tomato",
            id: 6,
            type: "vegetable"
        },
    ];

    return (
        <div>
            {obj.map(item => {
                if (item.type === "vegetable") {
                    return <h1 key={item.id}>{item.name}</h1>;
                }
            })}
        </div>
    );
};
