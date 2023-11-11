////// create type for separate state's pawn we can edit for compatible with backend

//// Sucess Type for APIs pawn service
type CreateRolloverSuccess = "R0001";
type ReadRolloverSuccess = "R0002";
type UpdateRolloverSuccess = "R0003";
type DeleteRolloverSuccess = "R0004";

type SuccessRolloverState = {
    code : CreateRolloverSuccess | ReadRolloverSuccess | UpdateRolloverSuccess | DeleteRolloverSuccess;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}

//// Failed Type for APIs pawn service
type CreateRolloverFailed = "R101";
type ReadRolloverFailed = "R0202";
type UpdateRolloverFailed = "R0303";
type DeleteRolloverFailed = "R0404";

type FailedRolloverState = {
    code : CreateRolloverFailed | ReadRolloverFailed | UpdateRolloverFailed | DeleteRolloverFailed;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}


//// Error type APIs can't define unkown state
type UnknownRolloverState = {
    code : string;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}

//// Grouping Type into PawnState
type RolloverStateInfo = 
    | SuccessRolloverState
    | FailedRolloverState
    | UnknownRolloverState


function rolloverInfo(rolloverState: RolloverStateInfo){
    console.log(rolloverState.code);
    
}
rolloverInfo