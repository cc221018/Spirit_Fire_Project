let map5 = [
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,2,0,0,1,0,0,3,0,0,1,0,2,1],
    [1,0,1,4,1,1,4,1,1,0,1,2,0,1,0,1,1],
    [1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1],
    [1,0,3,1,3,0,1,0,1,0,0,3,0,0,1,0,1],
    [1,0,1,1,0,1,1,4,1,1,1,0,1,0,1,0,1],
    [1,0,0,3,0,0,1,0,0,0,1,4,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,3,0,1],
    [1,0,-1,1,2,0,0,0,1,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]
];

function startLevel5() {
    let level5 = new Level();
    level5.startlevel(5);
    setup(map5);
}