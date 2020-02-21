import React, { Component } from "react";
import { JournalEntry } from "./journal_entry"

const rawJournalData = [
  { title: "Post Hell", content: "Post content", status: "draft" },
  { title: "Post Shit", content: "More content", status: "published" },
  { title: "Post Damn", content: "More content", status: "published" },
  { title: "Post Bloody", content: "More content", status: "published" }
];

export default class JournalList extends Component {
    constructor (props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "Sup dude",
            isOpen: true
        }
    }

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false })
    };
    
    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true })
    };
    
    toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false })
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true })
        }
    };
    
    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry title={journalEntry.title}
                    content={journalEntry.content}
                    />
                </div>
            )
        })

        return (
            <div>
                <h2>{this.props.heading}</h2>
                {journalEntries}

                <button onClick={this.clearEntries}> Clear Journal Entries
                </button>
                <button onClick={this.showAllEntries}> Show Journal Entries
                </button>
                <button onClick={this.toggleStatus}> Toggle Journal Entries
                </button>
            </div>
        );
    }
}