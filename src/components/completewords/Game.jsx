import React from "react";

type Props = {
  word: Object,
  onCompared: func,
  complete: Boolean
};

const Game = (props: Props) => {
  const wordA = props.word.word.toLowerCase().replace("b", "_");
  const wordB = props.word.word.toLowerCase();
  console.log(`aqui ${wordA}`);
  return (
    <form>
      <div className="row">
        <div className="col-md-4">
          <h3 className="title">Observa, lee y escribe la palabra correcta</h3>
          <div className="well well-lg">
            <div className="card card-inverse">
              <img className="card-img" src={props.word.img} alt="Card image" />
              <div className="card-img-overlay">
                <h1 className="card-title">{wordA}</h1>
                <p className="card-text">{props.word.definition}</p>
              </div>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td
                    onClick={() => props.onCompared("q", wordA)}
                    className="button_completeGame"
                  >
                    q
                  </td>
                  <td
                    onClick={() => props.onCompared("p", wordA)}
                    className="button_completeGame"
                  >
                    p
                  </td>
                </tr>
                <tr>
                  <td
                    onClick={() => props.onCompared("b", wordB)}
                    className="button_completeGame"
                  >
                    b
                  </td>
                  <td
                    onClick={() => props.onCompared("d", wordA)}
                    className="button_completeGame"
                  >
                    d
                  </td>
                </tr>
                <tr>
                  <td
                    onClick={() => props.onCompared("v", wordA)}
                    className="button_completeGame"
                  >
                    v
                  </td>
                  <td
                    onClick={() => props.onCompared("w", wordA)}
                    className="button_completeGame"
                  >
                    w
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Game;
