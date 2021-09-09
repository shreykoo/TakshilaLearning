import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { data } from './data';


const TabsPanel = () => {

    const [ activeTab, setActiveTab ] = useState(0);
    const [ childrenActiveTab,setChildrenActiveTab ] = useState(activeTab === 0 ? 'UPSC': 'CBSE');
    const [ activeChildrens, setActiveChildrens ] = useState(null);

    function filterChildren(){
        if(activeTab === 0){
            const newData = data.Competitive.filter(item => {
                return item.name === childrenActiveTab
            });
            setActiveChildrens(newData[0]?.children);
        }else if(activeTab === 1){
            const newData = data.k12.filter(item => {
                return item.name === childrenActiveTab
            });
            console.log(newData, 'new data')
            setActiveChildrens(newData[0]?.children)
        }
    };

    useEffect(() => { filterChildren() }, [ activeTab, childrenActiveTab]);


    function handleTabChange(newTab, childrenTab){
        setActiveTab(newTab);
        setActiveChildrens(childrenTab);
    };

    // console.log(activeChildrens, 'active childrens');

    return (
        <div className="p-20 w-4/5 mx-auto min-h-screen">
            <div>
                <Button
                    color="primary"
                    variant={activeTab === 0 ? 'contained': "text"}
                    onClick={() => handleTabChange(0, 'UPSC')}
                    style={{ textTransform: 'none', borderRadius: 'none'}}
                    size="large"
                >
                    Competitive 
                </Button>
                <Button
                    variant={activeTab === 1 ? 'contained': "text"}
                    color="primary"
                    onClick={() => handleTabChange(1, 'CBSE')}
                    style={{ textTransform: 'none', borderRadius: 'none'}}
                    size="large"
                >
                    Class K-12 
                </Button>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-start items-center p-10">
                {activeTab === 0 ?
                    <div>
                        {(data.Competitive).map(item => {
                            return (
                                <div key={item.id} onClick={() => setChildrenActiveTab(item.name)}
                                    className={`${childrenActiveTab === item.name ? 'text-green-500': null} text-2xl cursor-pointer`}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div>
                        {(data.k12).map(item => {
                            return (
                                <div key={item.id} onClick={() => setChildrenActiveTab(item.name)}
                                    className={`${childrenActiveTab === item.name ? 'text-green-500': null} text-2xl cursor-pointer`}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                }
                <div className="flex flex-wrap justify-between items-start mx-12">
                    {activeChildrens !== null && activeChildrens.length !== 0 && activeChildrens.map(item => {
                        return (
                            <div key={item.id} 
                                className="p-20 m-4 border border-gray-200 rounded-md shadow-md"
                            >
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default TabsPanel;
