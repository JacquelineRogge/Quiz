package cgodin.models.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class QuizQuestionPK implements Serializable {
    private int quizId;
    private int questionId;


    public QuizQuestionPK() {
    }

    public QuizQuestionPK(int quizId,int questionId) {
        this.questionId = questionId;
        this.quizId = quizId;
    }

    public int getQuizId() {
        return quizId;
    }

    public void setQuizId(int quizId) {
        this.quizId = quizId;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuizQuestionPK that = (QuizQuestionPK) o;
        return questionId == that.questionId && quizId == that.quizId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(questionId, quizId);
    }
}
