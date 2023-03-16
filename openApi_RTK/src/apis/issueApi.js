import { Axios } from './core';

const PATH = `/repos/angular/angular-cli/issues`;

const IssueApi = {
  getIssue() {
    return Axios.get(PATH);
  },
};

export default IssueApi;
