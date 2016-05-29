var issues = [{ id: 1, text: 'I don\'t know what the fuck is going on ??' }, { id: 2, text: 'There is magic??' }];

export default function issues(state = [], action) {
  switch (action.type) {
    case 'LOAD_ISSUES':
      return state.issues = issues;
    default:
      return state;
  }
}
