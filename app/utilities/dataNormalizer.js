export const normalize = (views) => {
  // Ensure views is an array, if not return an empty array
  if (!Array.isArray(views)) {
    console.error('Expected views to be an array, but got:', views);
    return [];
  }

  const data = [];

  for (const view of views) {
    // Ensure view.data exists and has the necessary properties
    if (view && view.data && view.data.name && view.data.key && view.data.value) {
      const existingDataItem = data.find((item) => item.name === view.data.name);

      if (existingDataItem) {
        existingDataItem.data.push({
          key: view.data.key,
          value: view.data.value,
        });
      } else {
        data.push({
          name: view.data.name,
          data: [{ key: view.data.key, value: view.data.value }],
          isComparison: view.data?.isComparison || false,
        });
      }
    } else {
      console.warn('Invalid view object encountered:', view);
    }
  }

  return data;
};
