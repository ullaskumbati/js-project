let score = null

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(valueInNumber)
// console.log(typeof valueInNumber);

// "33" => 33
// "33 abc" => NaN
// true => 1
// false => 0

let loggedIn = 1;

let booleanValue = Boolean(loggedIn);
// console.log(booleanValue);

// 1 => true; 0 => false
//  "" => false
//  "ullas" => true


let value = 3;
let negValue = -value;
// console.log(negValue);



  const { user } = useAuthContext();
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [secName, setSecName] = useState("");
  const [canMountEditor, setCanMountEditor] = useState(false);
  const { dbConfigData } = useContext(DataContext);

  const enableFile =
    dbConfigData && dbConfigData.length > 0
      ? dbConfigData[0].disable_doc
      : null;
  const xlGen =
    dbConfigData && dbConfigData.length > 0 ? dbConfigData[0].xlGen : null;
  const qEdit =
    dbConfigData && dbConfigData.length > 0 ? dbConfigData[0].qEdit : null;