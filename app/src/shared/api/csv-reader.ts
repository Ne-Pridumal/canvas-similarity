export const fileReader = (path: string, callback: (e: string | ArrayBuffer) => void) =>
  fetch(path).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  }).then(e => {
    const reader = new FileReader();
    reader.readAsText(e);
    reader.onloadend = (res) => {
      callback(res.target!.result!)
    }

  }).catch(err => {
    console.error(
      'There has been a problem with your fetch operation:',
      err
    );
  });
