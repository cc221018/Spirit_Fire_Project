let map7 = [
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],
    [1,-1,1,0,2,0,1,3,0,1,2,1,0,5,1,2,1],
    [1,0,1,4,1,0,1,0,0,1,6,1,4,1,1,0,1],
    [1,0,1,0,0,0,1,0,3,1,0,1,0,0,1,0,1],
    [1,0,1,0,1,0,1,0,0,1,0,0,0,4,1,0,1],
    [1,0,1,0,3,0,1,3,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,1,4,1,0,1,1,0,1,0,0,1,4,1],
    [1,0,1,0,1,0,0,0,1,3,0,1,0,1,0,0,1],
    [1,0,2,0,1,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1]
];

function startLevel7() {
    let level7 = new Level();
    level7.startlevel(7);
    setup(map7);
}