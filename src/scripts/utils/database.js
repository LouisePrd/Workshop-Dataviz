/**
 * Datas
 */


function fetchData() {
    fetch('https://run.mocky.io/v3/ecb04af4-0f14-41de-b362-b3354277077a')
      .then(response => response.json())
      .then(data => {
        structData(data)
      })
  
  }
  
  function structData(data) {
    var sizeData = Object.keys(data).length;
    let listPerson = {}
    for (let i = 1; i <= sizeData; i++) {
      let person = {
        name : data[i].name,
        age: data[i].age,
        moods : {
          period : {
            child : {
              joy : data[i].joy_child,
              anger : data[i].anger_child,
              love : data[i].love_child,
              fear : data[i].fear_child,
              excitement : data[i].excitement_child,
              loneliness : data[i].loneliness_child,
              shame : data[i].shame_child,
              satisfaction : data[i].satisfaction_child,
              sadness : data[i].sadness_child,
              frustration : data[i].frustration_child,
              pleasure : data[i].pleasure_child,
              jealousy : data[i].jealousy_child,
              anxiety : data[i].anxiety_child,
              inspiration : data[i].inspiration_child,
              regret : data[i].regret_child,
              boredom : data[i].boredom_child,
              relief : data[i].relief_child,
          },
          teen : {
            joy : data[i].joy_teen,
            anger : data[i].anger_teen,
            love : data[i].love_teen,
            fear : data[i].fear_teen,
            excitement : data[i].excitement_teen,
            loneliness : data[i].loneliness_teen,
            shame : data[i].shame_teen,
            satisfaction : data[i].satisfaction_teen,
            sadness : data[i].sadness_teen,
            frustration : data[i].frustration_teen,
            pleasure : data[i].pleasure_teen,
            jealousy : data[i].jealousy_teen,
            anxiety : data[i].anxiety_teen,
            inspiration : data[i].inspiration_teen,
            regret : data[i].regret_teen,
            boredom : data[i].boredom_teen,
            relief : data[i].relief_teen,
          },
          ya : {
            joy : data[i].joy_ya,
            anger : data[i].anger_ya,
            love : data[i].love_ya,
            fear : data[i].fear_ya,
            excitement : data[i].excitement_ya,
            loneliness : data[i].loneliness_ya,
            shame : data[i].shame_ya,
            satisfaction : data[i].satisfaction_ya,
            sadness : data[i].sadness_ya,
            frustration : data[i].frustration_ya,
            pleasure : data[i].pleasure_ya,
            jealousy : data[i].jealousy_ya,
            anxiety : data[i].anxiety_ya,
            inspiration : data[i].inspiration_ya,
            regret : data[i].regret_ya,
            boredom : data[i].boredom_ya,
            relief : data[i].relief_ya,
          },
          adult : {
            joy : data[i].joy_adult,
            anger : data[i].anger_adult,
            love : data[i].love_adult,
            fear : data[i].fear_adult,
            excitement : data[i].excitement_adult,
            loneliness : data[i].loneliness_adult,
            shame : data[i].shame_adult,
            satisfaction : data[i].satisfaction_adult,
            sadness : data[i].sadness_adult,
            frustration : data[i].frustration_adult,
            pleasure : data[i].pleasure_adult,
            jealousy : data[i].jealousy_adult,
            anxiety : data[i].anxiety_adult,
            inspiration : data[i].inspiration_adult,
            regret : data[i].regret_adult,
            boredom : data[i].boredom_adult,
            relief : data[i].relief_adult,
          },
        },
      },
      }
      listPerson[i] = person
    }
    console.log(listPerson)
  }
  
  
  // fetchData()
  