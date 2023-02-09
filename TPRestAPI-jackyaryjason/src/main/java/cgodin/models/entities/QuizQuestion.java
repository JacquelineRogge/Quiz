package cgodin.models.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
//@IdClass(QuizQuestionPK.class)
public class QuizQuestion {
    @EmbeddedId
    private QuizQuestionPK id;
    @Basic
    @Column(name = "SelectedOptionID")
    private Integer selectedOptionID;
    @ManyToOne
    @MapsId("QuizID")
    @JoinColumn(name = "QuizID")
    private Quiz quizByQuizId;
    @ManyToOne
    @MapsId("QuestionID")
    @JoinColumn(name = "QuestionID")
    private Question questionByQuestionId;


    public QuizQuestion() {
    }

    public QuizQuestion(QuizQuestionPK id, Integer selectedOptionID, Quiz quizByQuizId, Question questionByQuestionId) {
        this.id = id;
        this.selectedOptionID = selectedOptionID;
        this.questionByQuestionId = questionByQuestionId;
        this.quizByQuizId = quizByQuizId;
    }

    public QuizQuestionPK getId() {
        return id;
    }

    public void setId(QuizQuestionPK id) {
        this.id = id;
    }

    public Quiz getQuizByQuizId() {
        return quizByQuizId;
    }

    public void setQuizByQuizId(Quiz quizByQuizId) {
        this.quizByQuizId = quizByQuizId;
    }

    public Question getQuestionByQuestionId() {
        return questionByQuestionId;
    }

    public void setQuestionByQuestionId(Question questionByQuestionId) {
        this.questionByQuestionId = questionByQuestionId;
    }

    public Integer getSelectedOptionID() {
        return selectedOptionID;
    }

    public void setSelectedOptionID(Integer selectedOptionID) {
        this.selectedOptionID = selectedOptionID;
    }

    @Override
    public String toString() {
        return "QuizQuestion{" +
                "id=" + id +
                ", selectedOptionID=" + selectedOptionID +
                ", questionByQuestionId=" + questionByQuestionId +
                ", quizByQuizId=" + quizByQuizId +
                '}';
    }
}
