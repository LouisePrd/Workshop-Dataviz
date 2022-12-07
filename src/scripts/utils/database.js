/**
 * Datas
 */

export async function fetchData() {
  const res = await fetch(
    'https://run.mocky.io/v3/5ac87915-1ef3-4015-8ffa-5752b6231719'
  ).then(function (response) {
    return response.json()
  })
  const cleanData = structData(res)
  window.localStorage.setItem('data', JSON.stringify(cleanData))
  return cleanData
}

function structData(data) {
  var sizeData = Object.keys(data).length
  let people = []
  for (let i = 0; i < sizeData; i++) {
    let person = {
      name: data[i].name,
      age: data[i].age,
      moods: [
        {
          child: {
            positive: {
              joy: data[i].joy_child,
              love: data[i].love_child,
              excitement: data[i].excitement_child,
              satisfaction: data[i].satisfaction_child,
              pleasure: data[i].pleasure_child,
              inspiration: data[i].inspiration_child,
              relief: data[i].relief_child,
            },
            negative: {
              anger: data[i].anger_child,
              loneliness: data[i].loneliness_child,
              shame: data[i].shame_child,
              sadness: data[i].sadness_child,
              frustration: data[i].frustration_child,
              jealousy: data[i].jealousy_child,
              anxiety: data[i].anxiety_child,
            },
          },
        },
        {
          teen: {
            positive: {
              joy: data[i].joy_teen,
              love: data[i].love_teen,
              excitement: data[i].excitement_teen,
              satisfaction: data[i].satisfaction_teen,
              pleasure: data[i].pleasure_teen,
              inspiration: data[i].inspiration_teen,
              relief: data[i].relief_teen,
            },
            negative: {
              anger: data[i].anger_teen,
              loneliness: data[i].loneliness_teen,
              shame: data[i].shame_teen,
              sadness: data[i].sadness_teen,
              frustration: data[i].frustration_teen,
              jealousy: data[i].jealousy_teen,
              anxiety: data[i].anxiety_teen,
            },
          },
        },
        {
          ya: {
            positive: {
              joy: data[i].joy_ya,
              love: data[i].love_ya,
              excitement: data[i].excitement_ya,
              satisfaction: data[i].satisfaction_ya,
              pleasure: data[i].pleasure_ya,
              inspiration: data[i].inspiration_ya,
              relief: data[i].relief_ya,
            },
            negative: {
              anger: data[i].anger_ya,
              loneliness: data[i].loneliness_ya,
              shame: data[i].shame_ya,
              sadness: data[i].sadness_ya,
              frustration: data[i].frustration_ya,
              jealousy: data[i].jealousy_ya,
              anxiety: data[i].anxiety_ya,
            },
          },
        },
        {
          adult: {
            positive: {
              joy: data[i].joy_adult,
              love: data[i].love_adult,
              excitement: data[i].excitement_adult,
              satisfaction: data[i].satisfaction_adult,
              pleasure: data[i].pleasure_adult,
              inspiration: data[i].inspiration_adult,
              relief: data[i].relief_adult,
            },
            negative: {
              anger: data[i].anger_adult,
              loneliness: data[i].loneliness_adult,
              shame: data[i].shame_adult,
              sadness: data[i].sadness_adult,
              frustration: data[i].frustration_adult,
              jealousy: data[i].jealousy_adult,
              anxiety: data[i].anxiety_adult,
            },
          },
        },
      ],
    }
    people[i] = person
  }
  return people
}
