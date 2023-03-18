import { Axios } from './core';

const PATH = `/repos/angular/angular-cli/issues`;

const IssueApi = {
  getIssue(issue) {
    return Axios.get(PATH, {
      params: {
        per_page: issue.limit,
        page: issue.page,
        sort: issue.filterOption,
      },
    });
  },
};

export default IssueApi;
