////// create type for separate state's customer we can edit for compatible with backend

//// Sucess Type for APIs customer
type CreateCusSuccess = "C0001";
type ReadCusSuccess = "C0002";
type UpdateCusSuccess = "C0003";
type DeleteCusSuccess = "C0004";

type SuccessCustomerState = {
    code : CreateCusSuccess | ReadCusSuccess | UpdateCusSuccess | DeleteCusSuccess;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}

//// Failed Type for APIs customer
type CreateCusFailed = "C0101";
type ReadCusFailed = "C0202";
type UpdateCusFailed = "C0303";
type DeleteCusFailed = "C0404";

type FailedCustomerState = {
    code : CreateCusFailed | ReadCusFailed | UpdateCusFailed | DeleteCusFailed;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}


//// Error type APIs can't define unkown state
type UnknownCustomerState = {
    code : string;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}

//// Grouping Type into CustomerState
type CustomerStateInfo = 
    | SuccessCustomerState
    | FailedCustomerState
    | UnknownCustomerState


function cusInfo(customerState: CustomerStateInfo){
    console.log(customerState.code);
    
}
cusInfo