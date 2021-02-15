import React from 'react';
import StepperForm from '../helpers/StepperForm';

interface BuyflowProps {
    productId: ProductIds,
};

export enum ProductIds {
    devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES= {
    [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
    return <>
        <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
        <StepperForm />
    </>;
};

export default Buyflow;