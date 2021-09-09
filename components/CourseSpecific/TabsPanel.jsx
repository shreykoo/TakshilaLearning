import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { data } from './data';

const TabsPanel = () => {

    const [ activeTab, setActiveTab ] = useState(0);
    const [ childrenActiveTab,setChildrenActiveTab ] = useState('UPSC')
    return (
        <div className="p-20">
            <div>
                <Button
                    color="primary"
                    variant={activeTab === 0 ? 'contained': "text"}
                    onClick={() => setActiveTab(0)}
                    style={{ textTransform: 'none', borderRadius: 'none'}}
                    size="large"
                >
                    Competitive 
                </Button>
                <Button
                    variant={activeTab === 1 ? 'contained': "text"}
                    color="primary"
                    onClick={() => setActiveTab(1)}
                    style={{ textTransform: 'none', borderRadius: 'none'}}
                    size="large"
                >
                    Class K-12 
                </Button>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-start items-center p-20">
                {activeTab === 0 ?
                    <div>
                        {(data.Competitive).map(item => {
                            return (
                                <div key={item.id} onClick={() => setChildrenActiveTab(item.name)}>{item.name}</div>
                            )
                        })}
                    </div>
                    :
                    <div>
                        {(data.k12).map(item => {
                            return (
                                <div key={item.id} onClick={() => setChildrenActiveTab(item.name)}>{item.name}</div>
                            )
                        })}
                    </div>
                }
                <div>
                    
                </div>
            </div>
        </div>
    );
};
export default TabsPanel;
