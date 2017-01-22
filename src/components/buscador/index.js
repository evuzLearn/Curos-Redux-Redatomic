import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import Result from './result';
import dataGoT from '../../data/got';

function search(characters, filter) {
    return characters.filter(c => {
        const regex = new RegExp(filter.name, 'i');
        return (
            (regex.test(c.name) || regex.test(c.actor)) &&
            (!filter.family ||  c.family === filter.family) &&
            (!filter.seasons.length ||
                filter.seasons.every(e => c.seasons.indexOf(e) != -1)) &&
            (!filter.onlyAlive || c.alive)
        )
    });
}

function extractFamilyNames(characters) {
    return characters.reduce((acc, c) => {
        if (acc.indexOf(c.family) == -1)
            acc.push(c.family);

        return acc;
    }, []).sort();
}

function extractSeasons(characters) {
    return characters.reduce((acc, c) => {
        c.seasons.forEach(n => {
            if (acc.indexOf(n) == -1)
                acc.push(n);
        })
        return acc;
    }, []).sort();
}

class Buscador extends Component {
    constructor() {
        super();
        this.state = {
            characters: dataGoT.characters,
            familyNames: extractFamilyNames(dataGoT.characters),
            seasons: extractSeasons(dataGoT.characters),
            filter: {
                name: '',
                family: '',
                seasons: [],
                onlyAlive: false,
            }
        }
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    handleQueryChange(change) {
        const newFilter = Object.assign({}, this.state.filter, change);
        this.setState({
            filter: newFilter
        });
    }

    render() {
        const characters = search(this.state.characters, this.state.filter);
        return (
            <div className='search-engine'>
                <Header text={'Buscador GoT'} />
                <Form
                    familyNames={this.state.familyNames}
                    filter={this.state.filter}
                    allSeasons={this.state.seasons}
                    onQueryChange={this.handleQueryChange}
                    />
                <Result data={characters} />
            </div>
        )
    }
}

export default Buscador;