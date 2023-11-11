////// create type for separate state's pawn we can edit for compatible with backend

//// Sucess Type for APIs pawn service
type CreatePawnSuccess = "P0001";
type ReadPawnSuccess = "P0002";
type UpdatePawnSuccess = "P0003";
type DeletePawnSuccess = "P0004";

type SuccessPawnState = {
    code : CreatePawnSuccess | ReadPawnSuccess | UpdatePawnSuccess | DeletePawnSuccess;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}

//// Failed Type for APIs pawn service
type CreatePawnFailed = "P101";
type ReadPawnFailed = "P0202";
type UpdatePawnFailed = "P0303";
type DeletePawnFailed = "P0404";

type FailedPawnState = {
    code : CreatePawnFailed | ReadPawnFailed | UpdatePawnFailed | DeletePawnFailed;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}


//// Error type APIs can't define unkown state
type UnknownPawnState = {
    code : string;
    message: string;
    description: string;
    timestamp: string;
    data: any;
}

//// Grouping Type into PawnState
type PawnStateInfo = 
    | SuccessPawnState
    | FailedPawnState
    | UnknownPawnState


function pawnInfo(pawnState: PawnStateInfo){
    console.log(pawnState.code);
    
}
pawnInfo