import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';

class Index extends React.Component<{}, {}> {
    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            // nesto uraditi sa gif source. primjer prikaza: <img src={gifSource} />
        });
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Lecture
                    lecturerName="dino"
                    onExamStarted={(students) => console.log('start')}
                />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
