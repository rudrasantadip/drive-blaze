export interface Team{
    teamId:number;
    teamName:string;
    teamCode:string;
    members:Member[];
    leaderName:string;
    applicationSubmitted:boolean;
    ideaFile:Blob
    event:any;
}

export interface Member{
    memberId:number;
    memberName:string;
    memberDesignation:string;
    hasATeam:boolean;
    uniqueId:string;
    phoneNumber:string;
    username:string;
    password:string;
    role:string;
}


export interface ConMember{
    memberName:string;
    memberEmail:string;
    enrollmentNumber:string;
    mobileNumber:string;
    designation:string;
    hasATeam:boolean;
}

export interface Contest{
    contestTeamName:string;
    leaderName:string;
    paymentStatus:string;
    paymentId:string;
    conMembers:ConMember[];
}