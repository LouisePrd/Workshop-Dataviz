/**
 * Datas
 */

export async function fetchData() {
  const res = require('./data.json')
  const cleanData = structData(res)
  window.localStorage.setItem('data', JSON.stringify(cleanData))
  console.log('Set the local storage')
  return cleanData
}

function structData(data) {
  var sizeData = Object.keys(data).length
  let people = []
  for (let i = 0; i < sizeData; i++) {
    const current = data[i]
    const person = {
      name: current.name,
      age: current.age,
      moods: {
        child: {
          positive: {
            joy: current.joy_child,
            love: current.love_child,
            excitement: current.excitement_child,
            satisfaction: current.satisfaction_child,
            pleasure: current.pleasure_child,
            inspiration: current.inspiration_child,
            relief: current.relief_child,
          },
          negative: {
            anger: current.anger_child,
            loneliness: current.loneliness_child,
            shame: current.shame_child,
            sadness: current.sadness_child,
            frustration: current.frustration_child,
            jealousy: current.jealousy_child,
            anxiety: current.anxiety_child,
          },
        },
        teen: {
          positive: {
            joy: current.joy_teen,
            love: current.love_teen,
            excitement: current.excitement_teen,
            satisfaction: current.satisfaction_teen,
            pleasure: current.pleasure_teen,
            inspiration: current.inspiration_teen,
            relief: current.relief_teen,
          },
          negative: {
            anger: current.anger_teen,
            loneliness: current.loneliness_teen,
            shame: current.shame_teen,
            sadness: current.sadness_teen,
            frustration: current.frustration_teen,
            jealousy: current.jealousy_teen,
            anxiety: current.anxiety_teen,
          },
        },
        ya: {
          positive: {
            joy: current.joy_ya,
            love: current.love_ya,
            excitement: current.excitement_ya,
            satisfaction: current.satisfaction_ya,
            pleasure: current.pleasure_ya,
            inspiration: current.inspiration_ya,
            relief: current.relief_ya,
          },
          negative: {
            anger: current.anger_ya,
            loneliness: current.loneliness_ya,
            shame: current.shame_ya,
            sadness: current.sadness_ya,
            frustration: current.frustration_ya,
            jealousy: current.jealousy_ya,
            anxiety: current.anxiety_ya,
          },
        },
        adult: {
          positive: {
            joy: current.joy_adult,
            love: current.love_adult,
            excitement: current.excitement_adult,
            satisfaction: current.satisfaction_adult,
            pleasure: current.pleasure_adult,
            inspiration: current.inspiration_adult,
            relief: current.relief_adult,
          },
          negative: {
            anger: current.anger_adult,
            loneliness: current.loneliness_adult,
            shame: current.shame_adult,
            sadness: current.sadness_adult,
            frustration: current.frustration_adult,
            jealousy: current.jealousy_adult,
            anxiety: current.anxiety_adult,
          },
        },
      },
    }
    people[i] = person
  }
  return people
}
